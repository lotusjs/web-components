import { deleteAsync } from 'del';
import { exec, spawn } from 'child_process';
import { globby } from 'globby';
import browserSync from 'browser-sync';
import chalk from 'chalk';
import commandLineArgs from 'command-line-args';
import copy from 'recursive-copy';
import esbuild from 'esbuild';
import fs from 'fs/promises';
import { readFileSync } from 'fs';
import * as path from 'path';
import getPort, { portNumbers } from 'get-port';
import util from 'util';
import { replace } from 'esbuild-plugin-replace';
import { nextTask } from './utils';

import type { ChildProcessWithoutNullStreams } from 'child_process';

interface ChildResult {
  child: ChildProcessWithoutNullStreams;
  output: string[];
}

const { serve } = commandLineArgs([{ name: 'serve', type: Boolean }]);
const outdir = 'dist';
const cdndir = 'cdn';
const sitedir = '_site';
const execPromise = util.promisify(exec);

const bundleDirectories = [cdndir, outdir];

async function buildTheDocs(watch = false) {
  return new Promise<ChildResult>(async (resolve, reject) => {
    const afterSignal = '[eleventy.after]';

    const errorSignal = 'Original error stack trace:';
    const args = ['@11ty/eleventy', '--quiet'];
    const output: string[] = [];

    if (watch) {
      args.push('--watch');
      args.push('--incremental');
    }

    const child = spawn('npx', args, {
      stdio: 'pipe',
      cwd: 'docs',
      shell: true
    });

    child.stdout.on('data', (data) => {
      if (data.includes(afterSignal)) return; // don't log the signal
      output.push((data).toString());
    });

    child.stderr.on('data', data => {
      output.push(data.toString());
    });

    if (watch) {
      // The process doesn't terminate in watch mode so, before resolving, we listen for a known signal in stdout that
      // tells us when the first build completes.
      child.stdout.on('data', data => {
        if (data.includes(afterSignal)) {
          resolve({ child, output });
        }
      });

      child.stderr.on('data', data => {
        if (data.includes(errorSignal)) {
          // This closes the dev server, not sure if thats what we want?
          reject(output);
        }
      });
    } else {
      child.on('close', () => {
        resolve({ child, output });
      });
    }
  })
}

(async () => {
  await nextTask('Cleaning up the previous build', async () => {
    await Promise.all([deleteAsync(sitedir), ...bundleDirectories.map(dir => deleteAsync(dir))]);
    await fs.mkdir(outdir, { recursive: true });
  });
})()

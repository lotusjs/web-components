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
import ora from 'ora';
import util from 'util';
import { replace } from 'esbuild-plugin-replace';

const { serve } = commandLineArgs([{ name: 'serve', type: Boolean }]);
const outdir = 'dist';
const cdndir = 'cdn';
const sitedir = '_site';
const spinner = ora({ hideCursor: false }).start();
const execPromise = util.promisify(exec);

console.log(serve);

async function buildTheDocs(watch = false) {
  return new Promise(async (resolve, reject) => {
    const afterSignal = '[eleventy.after]';
    const errorSignal = 'Original error stack trace:';

    const args = ['@11ty/eleventy', '--quiet'];

    const output = [];

    if (watch) {
      args.push('--watch');
      args.push('--incremental');
    }

    const child = spawn('npx', args, {
      stdio: 'pipe',
      cwd: 'docs',
      shell: true
    });

  })
}

if (serve) {

}

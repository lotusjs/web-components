import 'zx/globals';
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

import type { BuildOptions } from 'esbuild';
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
let childProcess;
let buildResults;

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

async function buildTheSource() {
  const alwaysExternal = ['@lit/react', 'react'];

  const cdnConfig: BuildOptions = {
    format: 'esm',
    target: 'es2017',
    entryPoints: [
      //
      // NOTE: Entry points must be mapped in package.json > exports, otherwise users won't be able to import them!
      //
      // The whole shebang
      './src/lotus.ts',
      // The auto-loader
      './src/lotus-autoloader.ts',
      // Components
      ...(await globby('./src/components/**/!(*.(style|test)).ts')),
      // Translations
      ...(await globby('./src/translations/**/*.ts')),
      // Public utilities
      ...(await globby('./src/utilities/**/!(*.(style|test)).ts')),
      // Theme stylesheets
      ...(await globby('./src/themes/**/!(*.test).ts')),
      // React wrappers
      ...(await globby('./src/react/**/*.ts'))
    ],
    outdir: cdndir,
    chunkNames: 'chunks/[name].[hash]',
    define: {
      // Floating UI requires this to be set
      'process.env.NODE_ENV': '"production"'
    },
    bundle: true,
    external: alwaysExternal,
    splitting: true,
  }

  const npmConfig: BuildOptions = {
    ...cdnConfig,
    external: undefined,
    minify: false,
    packages: 'external',
    outdir
  };

  if (serve) {
    // Use the context API to allow incremental dev builds
    const contexts = await Promise.all([esbuild.context(cdnConfig), esbuild.context(npmConfig)]);
    await Promise.all(contexts.map(context => context.rebuild()));
    return contexts;
  } else {
    // Use the standard API for production builds
    return await Promise.all([esbuild.build(cdnConfig), esbuild.build(npmConfig)]);
  }
}

function handleCleanup() {
  buildResults.forEach(result => result.dispose());

  if (childProcess) {
    childProcess.kill('SIGINT');
  }

  process.exit();
}

(async () => {
  await nextTask('Cleaning up the previous build', async () => {
    await Promise.all([deleteAsync(sitedir), ...bundleDirectories.map(dir => deleteAsync(dir))]);
    await fs.mkdir(outdir, { recursive: true });
  });

  await nextTask('Generating component metadata', () => {
    return Promise.all(
      bundleDirectories.map(dir => {
        return execPromise(`lotus-scripts make-metadata --outdir "${dir}"`);
      })
    );
  });

  await nextTask('Generating themes', () => {
    return execPromise(`lotus-scripts make-themes --outdir "${outdir}"`);
  });

  await nextTask('Running the TypeScript compiler', () => {
    return execPromise(`tsc --project ./tsconfig.prod.json --outdir "${outdir}"`);
  });

  // Copy the above steps to the CDN directory directly so we don't need to twice the work for nothing.
  await nextTask(`Themes, Icons, and TS Types to "${cdndir}"`, async () => {
    await deleteAsync(cdndir);
    await copy(outdir, cdndir);
  });

  await nextTask('Building source files', async () => {
    buildResults = await buildTheSource();
  });

  if (serve) {
    let result: ChildResult;

    await nextTask('Building docs', async () => {
      result = await buildTheDocs(true);
    });

    const bs = browserSync.create();
    const port = await getPort({ port: portNumbers(8800, 8900) });
    const browserSyncConfig = {
      startPath: '/',
      port,
      logLevel: 'silent',
      logPrefix: '[shoelace]',
      logFileChanges: true,
      notify: false,
      single: false,
      ghostMode: false,
      server: {
        baseDir: sitedir,
        routes: {
          '/dist': './cdn'
        }
      }
    };

    bs.init(browserSyncConfig, () => {
      const url = `http://localhost:${port}`;
      console.log(chalk.cyan(`\n🥾 The dev server is available at ${url}`));

      // Log deferred output
      if (result.output.length > 0) {
        console.log('\n' + result.output.join('\n'));
      }

      // Log output that comes later on
      result.child.stdout.on('data', data => {
        console.log(data.toString());
      });
    })

    bs.watch('src/**/!(*.test).*').on('change', async filename => {
      console.log('[build] File changed: ', filename);

      try {
        const isTheme = /^src\/themes/.test(filename);
        const isStylesheet = /(\.css|\.styles\.ts)$/.test(filename);

        // Rebuild the source
        const rebuildResults = buildResults.map(result => result.rebuild());
        await Promise.all(rebuildResults);

        bs.reload();
      } catch (err) {
        console.error(chalk.red(err));
      }
    })

    // Reload without rebuilding when the docs change
    bs.watch([`${sitedir}/**/*.*`]).on('change', filename => {
      bs.reload();
    });
  }

  // Cleanup on exit
  process.on('SIGINT', handleCleanup);
  process.on('SIGTERM', handleCleanup);
})()

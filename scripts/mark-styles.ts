import 'zx/globals';
import autoprefixer from 'autoprefixer';
import postcss from 'postcss';
import prettier from 'prettier';
import { writeFileSync } from 'fs';
import { globbySync } from 'globby';

const files = globbySync('./src/components/**/[!_]*.styles.less');

files.forEach(async file => {
  const lessToCss = await $`lessc ${file}`;
  const { css } = await postcss([autoprefixer, ]).process(lessToCss, {
    from: file
  })

  const js = await prettier.format(
    `
    import { css } from 'lit';

    export default css\`
      ${css}
    \`;
  `,
    { parser: 'babel-ts' }
  );

  writeFileSync(file.replace('.less', '.ts'), js, {
    encoding: 'utf8'
  })
});

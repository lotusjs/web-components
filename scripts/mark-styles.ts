import 'zx/globals';
import less from 'less';autoprefixer
import autoprefixer from 'autoprefixer';
import postcss from 'postcss';
import prettier from 'prettier';
import { writeFileSync, readFileSync } from 'fs';
import { globbySync } from 'globby';

const files = globbySync('./src/components/**/[!_]*.less');

files.forEach(async file => {
  const source = readFileSync(file, 'utf8');

  const { css: lessToCss } = await less.render(source, {});

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

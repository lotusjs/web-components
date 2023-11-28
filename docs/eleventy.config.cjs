const { JSDOM } = require('jsdom');
const { customElementsManifest, getAllComponents } = require('./_utilities/cem.cjs');

const shoelaceFlavoredMarkdown = require('./_utilities/markdown.cjs');
const prettier = require('./_utilities/prettier.cjs');

const assetsDir = 'assets';
const cdndir = 'cdn';
const npmdir = 'dist';
const allComponents = getAllComponents();
let hasBuiltSearchIndex = false;

module.exports = function (eleventyConfig) {
  // Global data
  eleventyConfig.addGlobalData('baseUrl', 'https://lotus.xingkang.wang/');
  eleventyConfig.addGlobalData('layout', 'default');
  eleventyConfig.addGlobalData('toc', true);
  eleventyConfig.addGlobalData('meta', {
    title: 'LotusDesign',
    description: '基于 Web 标准构建的 UI 组件库（适用于所有框架）',
    version: customElementsManifest.package.version,
    components: allComponents,
    cdndir,
    npmdir
  });

  // Layout aliases
  eleventyConfig.addLayoutAlias('default', 'default.njk');

  // Copy assets
  eleventyConfig.addPassthroughCopy(assetsDir);
  eleventyConfig.setServerPassthroughCopyBehavior('passthrough');

  // Custom markdown syntaxes
  eleventyConfig.setLibrary('md', shoelaceFlavoredMarkdown);

  eleventyConfig.addFilter('markdown', content => {
    return shoelaceFlavoredMarkdown.render(content);
  });

  eleventyConfig.addFilter('markdownInline', content => {
    return shoelaceFlavoredMarkdown.renderInline(content);
  });

  eleventyConfig.addTransform('html-transform', function (content) {
    const doc = new JSDOM(content, {
      url: `https://internal/`
    }).window.document;

    // DOM transforms
    content = `<!DOCTYPE html>\n${doc.documentElement.outerHTML}`;

    // String transforms
    content = prettier(content);

    return content;
  })

  eleventyConfig.on('eleventy.after', () => {
    console.log('[eleventy.after]');
  });

  return {
    dir: {
      input: 'pages',
      output: '../_site',
      includes: '../_includes'
    },
    markdownTemplateEngine: 'njk',
    templateEngineOverride: ['njk']
  };
}

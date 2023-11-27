const { JSDOM } = require('jsdom');

const shoelaceFlavoredMarkdown = require('./_utilities/markdown.cjs');
const prettier = require('./_utilities/prettier.cjs');

const assetsDir = 'assets';

module.exports = function (eleventyConfig) {
  eleventyConfig.addGlobalData('layout', 'default');

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

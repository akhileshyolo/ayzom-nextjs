// If you want to use other PostCSS plugins, see the following:
// https://tailwindcss.com/docs/using-with-preprocessors
// https://postcss.org/
// PostCSS is a tool for transforming styles with JS plugins. 
// These plugins can lint your CSS, support variables and mixins, transpile future CSS syntax, inline images, and more.
// PostCSS is used by industry leaders including Wikipedia, Twitter, Alibaba, and JetBrains. 
// The Autoprefixer PostCSS plugin is one of the most popular CSS processors.
// PostCSS takes a CSS file and provides an API to analyze and modify its rules (by transforming them into an Abstract Syntax Tree). 
// This API can then be used by plugins to do a lot of useful things, e.g., to find errors automatically, or to insert vendor prefixes.

module.exports = {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  }
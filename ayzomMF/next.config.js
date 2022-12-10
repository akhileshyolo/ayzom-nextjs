const NextFederationPlugin = require('@module-federation/nextjs-mf');

module.exports = {
  webpack(config, options) {
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: 'home',
          filename: 'static/chunks/remoteEntry.js',
          remotes: {
          },
          exposes: {
            './nav': './components/nav.js'
          },
          shared: {},
        }),
      );
    }

    return config;
  },
};
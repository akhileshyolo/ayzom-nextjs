const withImages = require('next-images')
module.exports = withImages({
  fileExtensions: ["jpg", "jpeg", "png", "gif"],
  esModule: true,
  basePath: '',
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(gif|svg|jpg|png)$/,
      loader: "file-loader",
    })
    return config
  }
})
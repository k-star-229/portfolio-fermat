const PurgecssPlugin = require("purgecss-webpack-plugin")
const glob = require("glob-all")

new PurgecssPlugin({
  paths: [paths.appHtml, ...glob.sync(`${paths.appSrc}/**/*`, { nodir: true })],
})

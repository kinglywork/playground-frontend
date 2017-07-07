/**
 * Created by Royliu on 2016/12/28.
 */
var WebpackDevServer = require("webpack-dev-server");
var webpack = require("webpack");

// Set environment variables here...

var webpackConfig = require('./webpack.dev.config');

webpackConfig.plugins.unshift(new webpack.HotModuleReplacementPlugin());

var compiler = webpack(webpackConfig); // load webpack
// run dev-server
var server = new WebpackDevServer(compiler, {
    devtool: "source-map",
    contentBase: "./build",
    publicPath: "/",
    hot: true,
    inline: true,
    progress: true,
    colors: true
});
server.listen(3000);
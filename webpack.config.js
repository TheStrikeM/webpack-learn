const path = require("path")
const HTMLWebpackPlugin = require("html-webpack-plugin")
const {CleanWebpackPlugin} = require("clean-webpack-plugin")

module.exports = {
    entry: {
        main: path.resolve(__dirname, 'src', 'index.js'),
        info: path.resolve(__dirname, 'src', 'info.js')
    },
    mode: "development",
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html')
        }),
        new CleanWebpackPlugin()
    ]
}
const path = require("path")
const HTMLWebpackPlugin = require("html-webpack-plugin")
const {CleanWebpackPlugin} = require("clean-webpack-plugin")

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        main: './index.js',
        info: './info.js'
    },
    mode: "development",
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        alias: {
            '@styles': path.resolve(__dirname, 'src/styles'),
            '@assets': path.resolve(__dirname, 'src/assets')
        }
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html'
        }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: ['file-loader']
            }
        ]
    }
}
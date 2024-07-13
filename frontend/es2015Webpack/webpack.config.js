const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    target: 'web',
    entry: {
        main: path.resolve(__dirname, "src/main.js")
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            title: 'My First Page',
            inject: 'body'
        })
    ]
}
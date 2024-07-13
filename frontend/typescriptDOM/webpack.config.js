const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    target: 'node',
    entry: {
        main: path.resolve(__dirname, "src/main.ts")
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test:/\.ts?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            title: 'Products Page',
            inject: 'body',
            template: 'index.html'
        })
    ]
}
let path = require('path');
let webpack = require('webpack');

const BUILD_DIR = path.join(__dirname, "build"),
    CLIENT_DIR = path.join(__dirname, "src");

module.exports = {
    entry: path.resolve(CLIENT_DIR, "./index.js"),
    target: "node",
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'main.bundle.js'
    },
    devServer: {
        inline: true,
        port: 8000
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['env']
                }
            },
            {
                test: /\.hbs$/,
                loader: "handlebars-loader"
            }

        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};
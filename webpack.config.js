var path = require('path');
var webpack = require('webpack');

const PATHS = {
    app: path.join(__dirname, 'client'),
    common: path.join(__dirname, 'common'),
    build: path.join(__dirname, 'build'),
    node_modules: path.join(__dirname, 'node_modules')
}


module.exports = {
    entry: [
        'webpack-hot-middleware/client',
        './client/index'
    ],
    output: {
        path: PATHS.build,
        filename: 'bundle.js',
        publicPath: '/build/'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                loaders: ['babel'],
                exclude: PATHS.node_modules
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                loader: 'url-loader?limit=8192'
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};
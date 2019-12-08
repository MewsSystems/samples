const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const webpackConfig = {
    plugins: [
        new webpack.NoErrorsPlugin(),
    ],
    entry: {
        app: './app/app.js',
    },
    output: {
        filename: '[name].js',
        library: 'app',
        libraryTarget: 'window',
    },
    resolve: {
        extensions: ['', '.js', '.json'],
    },
    module: {
        loaders: [{
            test: /\.js?$/,
            exclude: /(node_modules|Generated)/,
            loader: 'babel',
        }, {
            test: /\.json$/,
            loader: 'json',
        }, {
            test: /\.css$/,
            loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]' 
        }],
    },
    devtool: 'eval',
    devServer: {
        contentBase: './app',
    },
    plugins: [
        new ExtractTextPlugin('style.css', { allChunks: true })
    ]
};

module.exports = webpackConfig;

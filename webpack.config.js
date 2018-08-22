const path = require('path');
const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: './src/js/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename:'main.js',
        publicPath: '/dist'
    },
    module: {
        rules: [
            {
                test: /\.css$/,   
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    // optimization: {
    //     minimizer: [
    //         new UglifyJsPlugin({ /* your config */ })
    //     ]
    // },
    plugins: [
        new UglifyJsPlugin({ /* your config */ })
    ]
}
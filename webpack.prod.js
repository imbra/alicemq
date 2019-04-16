const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'production',
    entry: path.resolve(__dirname, './client/index.js'),
    output:{
        path: path.resolve(__dirname, 'client/dist'),
        filename: './client/dist/bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
        contentBase: __dirname,
        hot: true,
    },
    module: {
        rules: [
            {
                exclude: [/node_modules/, /onLoad.json/, /test/],
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
};
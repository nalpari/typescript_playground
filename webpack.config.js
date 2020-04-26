var webpack = require('webpack');
var path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        'main': './src/main.ts'
    },
    output: {
        filename: '[name].js',
        // filename: 'MAIN_TYPESCRIPT_SDK.js',
        path: path.resolve(__dirname, 'dist'),
        // libraryTarget: 'var',
        // library: 'MAIN_TYPESCRIPT_SDK'
    },
    mode :'development',
    devtool: 'source-map',
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            "title": 'WEBPACK',
            "inject": 'body',
            "template": path.relative(__dirname, 'index.html')
        })
    ],
    devServer: {
        // contentBase: __dirname + "/dist/",
        inline: true,
        hot: true,
        host: "localhost",
        port: 5500
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: ['ts-loader']
            }
        ]
    },
    resolve : {
        //root: __dirname,
        modules: [
            'node_modules',
            //'./src/components'
        ],
        extensions: ['.js', '.ts']
    },
    node: { fs: 'empty' , net : 'empty', tls : 'empty'}   // 웹팩 compile 시 오류 처리
};
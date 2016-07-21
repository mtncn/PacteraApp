/**
 * Created by vision on 16/1/17.
 */
var path = require('path');
var webpack = require("webpack");

//编译输出路径
module.exports = {
    debug: true,
    //entry: {"main2": ['./src/main2'], "main": ['./src/main']},
    entry: {"main": ['./src/main']},
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].build.js',
        publicPath: ''
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "ng-annotate"
            }
        ]
    },
    resolve: {
        // require时省略的扩展名，如：require('module') 不需要module.js
        extension: ['', '.js'],
        //别名
        alias: {}
    },
    plugins: []
};

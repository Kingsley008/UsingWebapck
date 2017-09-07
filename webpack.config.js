const path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: './src/app.js',
    },

    output: {

        path: path.resolve('./dist'),

        filename: 'js/[name].js'

    },
    plugins: [
        // 自己下载的加入插件
        new htmlWebpackPlugin({
            filename: "index.html",
            template: 'index.html',//指定模版
            minify: {
                removeComments: true, // 压缩注释
                collapseWhitespace: true // 压缩空格
            },
            chunks:['main'],
        }),
    ],
    module: {
        // configuration regarding modules
        rules: [
            // rules for modules (configure loaders, parser options, etc.)

            {
                test: /\.jsx?$/, // 匹配的文件
                loader: 'babel-loader',   // 在.babelrc 配置相关的参数
                exclude: path.resolve(__dirname, 'node_modules'), //  排除的目录 填写绝对路径
                include: path.resolve(__dirname, 'src') // 需求运行的目录
            },
            {
                test: /\.css$/,
                use: [{loader: 'style-loader',}, {loader: 'css-loader',}, {
                    loader: 'postcss-loader',
                    options: {
                        plugins: function () {
                            return [require('autoprefixer')({browsers: ["last 5 versions"]})];
                        }
                    }
                }],
            },
            {
                test: /\.scss/,
                use: [{loader: 'style-loader',}, {loader: 'css-loader',}, {loader: 'sass-loader',},{
                    loader: 'postcss-loader',
                    options: {
                        plugins: function () {
                            return [require('autoprefixer')({browsers: ["last 5 versions"]})];
                        }
                    }
                }],

            },
            {
                test: /\.(png|jpg|gif|woff|woff2|ttf|svg|eot)$/,
                loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]'
            },

            ],
    }

}

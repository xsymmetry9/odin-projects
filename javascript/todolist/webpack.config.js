const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: "development",
    entry: "/src/pages/index.js",
    devtool: "inline-source-map",
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'images/[name][ext][query]',
        // clean: true,
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },
    module:{
        rules:[
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2)$/i,
                type: 'asset/resource',
                generator:{
                    filename: 'fonts/[name][ext][query]'
                },
            },
        ],
    },
    plugins:[
        new HtmlWebpackPlugin({
            title: "Do it",
            filename: "index.html",
            template: 'src/template.html',
        })
    ]

}
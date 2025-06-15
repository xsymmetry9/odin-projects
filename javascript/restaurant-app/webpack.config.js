const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: "production",
    entry: "/src/pages/index.js",
    devtool: 'inline-source-map',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'images/[name][ext][query]',
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
                // generator: {
                //     filename: 'styles/[name][ext][query]'
                // }
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name][ext][query]'
                }
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'MyRestaurant',
            filename: 'index.html',
            template: 'src/template.html',
        }),
    ]

};
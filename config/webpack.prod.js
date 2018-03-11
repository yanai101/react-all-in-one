const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    devtool: "source-map",
    mode: "production",
    output: {
        publicPath: ''
    },
    module: {
        rules: [

        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: "css/style.css",
            disable: false,
            allChunks: true
        }),
        new HtmlWebpackPlugin({
            template:'./index.html',
            title:'Prod version',
            minify:{
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true
            }
        })
    ]
}
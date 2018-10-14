const webpack = require("webpack");
// const ExtractTextPlugin = require("extract-text-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const MiniCssExtractPlugin = require("extract-css-chunks-webpack-plugin");


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
        // new ExtractTextPlugin({
        //     filename: "css/style.css",
        //     disable: false,
        //     allChunks: true
        // }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilename: "[id].css",
            cssModules: true // if you use cssModules, this can help.
        }),
        new HtmlWebpackPlugin({
            template:'./static/index.html',
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
        }),
        new webpack.DefinePlugin({ 'process.env.API_URL': JSON.stringify('http://PRODURL:8000') })
    ]
}
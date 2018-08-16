const webpack = require("webpack");
const configPath = require('./paths.config');

const HotModuleReplacementPlugin = webpack.HotModuleReplacementPlugin;
const NamedModulesPlugin = webpack.NamedModulesPlugin;
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');


// module.exports = (env) =>{
//
// }


const config = {
    mode: 'development',
    devtool: "eval-source-map",
    output: {
        publicPath: '/'
    },
    devServer: {
        open: true,
        hot: true,
        compress: true,
        contentBase: configPath.buildPath,
        stats: "minimal",
        // quiet: true,
        proxy: {
            "/api": "http://localhost:3000/" // or other url :)
        },
        // quiet: true,
        historyApiFallback: {
            disableDotRule: true
        },
        overlay: {
            warnings: true,
            errors: true
        },

    },
    module: {
        rules: [

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development site',
            template: './index.html',
        }),
        new NamedModulesPlugin(),
        new HotModuleReplacementPlugin(),
        new ExtractTextPlugin({
            filename: "style.css",
            allChunks: true,
            disable: true
        }),
        new webpack.DefinePlugin({ 'process.env.API_URL': JSON.stringify('http://DEV:8000' ) })
    ]
};

module.exports = config;
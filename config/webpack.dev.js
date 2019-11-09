const webpack = require("webpack");
const configPath = require('./paths.config');

const HotModuleReplacementPlugin = webpack.HotModuleReplacementPlugin;
const NamedModulesPlugin = webpack.NamedModulesPlugin;
const MiniCssExtractPlugin = require("extract-css-chunks-webpack-plugin");

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
            template: './static/index.html',
        }),
        new NamedModulesPlugin(),
        new HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilename: "[id].css",
            hot: true, // optional as the plugin cannot automatically detect if you are using HOT, not for production use
            orderWarning: true, // Disable to remove warnings about conflicting order between imports
            reloadAll: true, // when desperation kicks in - this is a brute force HMR flag
            cssModules: true // if you use cssModules, this can help.
        }),
        new webpack.DefinePlugin({
            'process.env.API_URL': JSON.stringify('http://DEV:8000')
        })
    ]
};

module.exports = config;
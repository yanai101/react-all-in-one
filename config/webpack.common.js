const path = require('path');
const configPath = require('./paths.config');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("extract-css-chunks-webpack-plugin");

const InterpolateHtmlPlugin = require("react-dev-utils/InterpolateHtmlPlugin");
const CopyWebpackPlugin = require('copy-webpack-plugin')



module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: configPath.buildPath,
        chunkFilename: '[name].bundle.js',
    },
    module: {
        rules: [
            // *** if not use tsx ***
            // {
            //     test: /\.js$/,
            //     enforce: "pre",
            //     exclude: /node_modules/,
            //     use: ["source-map-loader" ,"babel-loader"]
            // },
            {
                test: /\.tsx?$/,
                use:  "ts-loader" // "awesome-typescript-loader"
            },
            {
                test: /((\.jsx?)|(\.js))$/,
                exclude: /(node_modules|bower_components)/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', "@babel/preset-react"],
                        plugins: ['@babel/plugin-proposal-object-rest-spread' ,"@babel/plugin-syntax-dynamic-import"]                        
                     }
                    // options: {
                    //     transpileOnly: true, // Note, this means you ignore errors.// Due to legacy, we ignore errors in TypeScript files too, DON'T DO THIS FOR TS FILES
                    //     useCache: true,
                    //     configFileName: process.env.TS_CONFIG_CODE || 'tsconfig.json'
                    // }
                }],

            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                            loader: "css-loader",
                            options: {
                                modules: true,
                                importLoaders: 1, // make sure sass-loader is used on imported assets
                                modules: {
                                    localIdentName: "[local]__[name]__[hash:base64:5]",
                                }
                                // publicPath: configPath.buildPath //"./dist"
                            }
                        },
                        // {loader: 'postcss-loader'}
                        {
                            loader: 'postcss-loader',
                            // for local post css- option config...
                            // options: {
                            //     indent:'postcss',
                            //     plugins:(loader) => {
                            //         require('cssnano')({
                            //             preset: 'default'
                            //         })
                            //     }
                            // }
                        }
                        
                    ]
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            importLoaders: 1, // make sure sass-loader is used on imported assets
                            modules: {
                                localIdentName: "[local]__[name]__[hash:base64:5]",
                            }
                            // publicPath: configPath.buildPath //"./dist"
                        }
                    },
                    {
                        loader: 'postcss-loader',
                    },
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: 'media/[name].[hash:8].[ext]',
                    },
                }]

            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[path]/font/[name].[ext]',
                        length: 10000
                    }
                }]
            }
        ]
    },
    plugins: [
        // new MiniCssExtractPlugin({
        //     // Options similar to the same options in webpackOptions.output
        //     // both options are optional
        //     filename: "[name].css",
        //     chunkFilename: "[id].css"
        // }),
        // new HtmlWebpackPlugin({
        //     inject: true,
        //     hash: true,
        // }),
        new CopyWebpackPlugin([
            {
                from: './static/',
                to: './'
            }
        ])
    ],
    resolve: {
        extensions: [".js", "jsx" , ".ts", ".tsx", ".css", ".scss"]
    }
};
const path = require("path");
const webpack = require("webpack");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
// const BabelSyntaxPlugin = require("@babel/plugin-syntax-class-properties")
//const TextReplaceHtmlWebpackPlugin = require("text-replace-html-webpack-plugin");

const presets = [
    [
        "@babel/env",
        {
            //plugins:["@babel/plugin-syntax-class-properties", "@babel/plugin-proposal-class-properties"],
            targets: {
                ie: "9",
                edge: "17",
                firefox: "48",
                chrome: "49",
                safari: "11.1",
            },
            useBuiltIns: "usage",
            corejs: "2.6.4",
        },
    ],
];

module.exports = {
    mode: "production",
    
    entry: "./src/index.js",
    output: {
        filename: "yesItsVegan.[contenthash].bundle.js",
        path: path.resolve(__dirname, "public"),
    },
    
    module: {
        rules: [
            {test: /\.hbs$/, loader: "handlebars-loader"},

            {
                test: /\.(png|jpe?g|gif|jpg)$/i,
                loader: "file-loader",
                options: {
                    name: "[name].[ext]",
                },
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        plugins: ["@babel/plugin-syntax-class-properties", "@babel/plugin-proposal-class-properties"],
                        presets: ["@babel/preset-env", "@babel/react"],
                        
                    },
                },
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: './'
                           
                        },
                    },
                    "css-loader",
                ],
            },
            
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
         
            filename: "index.html",
            path: path.resolve(__dirname, "./public"),
          publicPath: '/',
           inject: false,
           template: './src/HandlebarsTemplate.hbs',
        }),
        new CleanWebpackPlugin({cleanStaleWebpackAssets: false}),
        new MiniCssExtractPlugin({
            filename: "yesItsVegan_react.[contenthash].css"
        }),
        
    ],
   
    devServer: {
        
        contentBase: path.resolve(__dirname, 'public'),
        port: 9000,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "Accept, Origin, X-Requested-With, Content-Type, Last-Modified"
          },
          historyApiFallback: true,
        
        
      },
      optimization: {
      
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin({
                sourceMap: true,
            }),
        ],
        
    },
    // target: 'web',
    devtool: "source-map",
};

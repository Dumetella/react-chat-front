const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = () => {
    return {
        mode: "production",
        entry: "./src/index.tsx",
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: "ts-loader",
                    exclude: /node_modules/,
                },
                {
                    test: /\.scss$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        "css-loader",
                        {
                            loader: "postcss-loader",
                            options: {
                                postcssOptions: {
                                    plugins: [
                                        ["postcss-preset-env"],
                                    ],
                                },
                            },
                        },
                        "sass-loader"
                    ],
                },
                {
                    test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
                    type: "javascript/auto",
                    loader: "file-loader",
                    options: {
                        publicPath: "../",
                        name: "[path][name].[ext]",
                        context: path.resolve(__dirname, "public/assets"),
                        emitFile: false,
                    },
                },
                {
                    test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                    type: "javascript/auto",
                    exclude: /images/,
                    loader: "file-loader",
                    options: {
                        publicPath: "../",
                        context: path.resolve(__dirname, "public/assets"),
                        name: "[path][name].[ext]",
                        emitFile: false,
                    },
                },
            ],
        },
        resolve: { extensions: [".tsx", ".ts", ".js"] },
        output: {
            filename: "js/[name].bundle.js",
            path: path.resolve(__dirname, "../dist"),
            publicPath: "",
        },
        optimization: {
            minimizer: [
                new TerserPlugin({
                    extractComments: false,
                    terserOptions: {
                        compress: {
                            drop_console: true,
                        },
                    },
                })
            ],
            splitChunks: {
                chunks: "all",
            },
        },
        plugins: [
            new CleanWebpackPlugin(),
            new CopyPlugin({
                patterns: [
                    { from: "./public/assets/images", to: "images", noErrorOnMissing: true, },
                ],
            }),
            new MiniCssExtractPlugin({ filename: "css/app.min.css" }),
            new HtmlWebpackPlugin({
                template: "./public/index.html",
                inject: true,
                minify: false
            }),
        ]
    };
};
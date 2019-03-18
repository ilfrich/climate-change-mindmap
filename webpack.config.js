const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")

const BUILD_DIR = path.resolve(__dirname, "public/dist")
const APP_DIR = path.resolve(__dirname, "app", "src")

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: "index.html",
    filename: "index.html",
    inject: true,
})

// Enable multi-pass compilation for enhanced performance
// in larger projects. Good default
const HotModuleReplacementPluginConfig = new webpack.HotModuleReplacementPlugin({
    multiStep: false,
})

const jQueryPluginConfig = new webpack.ProvidePlugin({
    jQuery: "jquery",
    $: "jquery",
    jquery: "jquery",
})

// See https://medium.com/@kimberleycook/intro-to-webpack-1d035a47028d#.8zivonmtp for
// a step-by-step introduction to reading a webpack config
const config = {
    entry: `${APP_DIR}/index.js`,
    output: {
        path: BUILD_DIR,
        filename: "bundle.js",
        publicPath: "/dist/",
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
        ],
        // preLoaders: [{ test: /\.json$/, loader: "json" }],
        // loaders: [
        //     {
        //         test: /\.js$/,
        //         include: APP_DIR,
        //         // babel loader for ES6 tranpilation and
        //         // react-hot for HMR of react components
        //         // config for babel-loader is in .babelrc
        //         loaders: ["react-hot-loader/webpack", "babel"],
        //     },
        //     {
        //         test: /\.css$/,
        //         loader: "style-loader!css-loader",
        //     },
        //     {
        //         test: /\.scss$/,
        //         loader: "style-loader!css-loader",
        //     },
        //     {
        //         test: /\.png$/,
        //         loader: "url-loader?limit=100000",
        //     },
        //     {
        //         test: /\.jpg$/,
        //         loader: "file-loader",
        //     },
        //     {
        //         test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        //         loader: "url?limit=10000&mimetype=application/font-woff",
        //     },
        //     {
        //         test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        //         loader: "url?limit=10000&mimetype=application/octet-stream",
        //     },
        //     {
        //         test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        //         loader: "file",
        //     },
        //     {
        //         test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        //         loader: "url?limit=10000&mimetype=image/svg+xml",
        //     },
        // ],
    },
    plugins: [HTMLWebpackPluginConfig, HotModuleReplacementPluginConfig, jQueryPluginConfig],
}

module.exports = config

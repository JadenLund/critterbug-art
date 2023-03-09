const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const publicUrl = process.env.PUBLIC_URL;

module.exports = ({ mode, preview }) => {
    process.env.BABEL_ENV = mode
    process.env.NODE_ENV = mode
    process.env.PREVIEW = preview

    return merge(common, {
        mode: mode,
        devServer: {
            publicPath: publicUrl
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: "./public/index.html"
            })
        ]
    });
}

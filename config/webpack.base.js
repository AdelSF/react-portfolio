const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');
const DIST_DIR = path.resolve(__dirname, "../dist");
const SRC_DIR = path.resolve(__dirname, "src");
const ASSETS_DIR = path.resolve(__dirname, "../assets");

module.exports = {
    entry: ["@babel/polyfill", "./src/index.js"],
    output: {
        path: DIST_DIR,
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_mudules/,
                options: {
                    presets: [
                        '@babel/preset-react',
                        ['@babel/preset-env', { targets: { browsers: ['last 4 versions']}}],
                        {
                            "plugins": [[
                                "babel-plugin-styled-components",
                                {
                                    "displayName": true,
                                    "ssr": false
                                }
                            ]]
                        }
                    ]
                }
            }, // added the part below for SVG
            {
                test: /\.(png|jp(e*)g|svg|gif)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: 'images/[hash]-[name].[ext]',
                    },
                  },
                ],
              },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'React App',
            filename: DIST_DIR + '/index.html',
            cache: true,
            template: require('html-webpack-template'),
            appMountId: 'root',
            headHtmlSnippet: `<link rel=icon href=${ASSETS_DIR}/icons/favicon.png>`,
            headHtmlSnippet: `<link href="https://fonts.googleapis.com/css2?family=Arvo&display=swap" rel="stylesheet"> `
        })
    ]
}
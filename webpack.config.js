const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');


module.exports = () => {
    const plugins = [
        new ExtractTextPlugin("css/[name].css"),
        new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'index.html') }),
        new CleanWebpackPlugin(),
    ];
    return {
        entry: {
            index: [path.resolve(__dirname, 'src/index.js')]
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'js/[name].js'
        },
        devServer: {
            port: 7777,
            historyApiFallback: true
        },
        devtool: 'cheap-module-eval-source-map',
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    loader: 'babel-loader',
                    exclude: /(node_modules)/,
                    query: {
                        presets: ['@babel/react', '@babel/preset-env'],
                        plugins: ['@babel/proposal-class-properties']
                    }
                },
                {
                    test: /\.css$/,
                    use: ExtractTextPlugin.extract({
                        use: [
                            {
                                loader: 'css-loader',
                                options: {
                                    minimize: true
                                }
                            }
                        ]
                    })
                },
                {
                    test: /\.(jpg|png|gif|woff|woff2|eot|ttf|svg)$/,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                limit: 100000,
                                fallback: 'file-loader',
                                name: 'images/[name].[hash].[ext]'
                            }
                        }
                    ]
                }
            ]
        },
        plugins
    }
}
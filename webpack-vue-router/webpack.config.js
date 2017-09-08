/**
 * Created by Pwcong on 2017/1/12.
 */
var path = require('path')

module.exports = {

    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname,"dist"),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    }


}
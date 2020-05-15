const common = require('./webpack.common')
const merge = require('webpack-merge')

module.exports = merge(common, {
    // mode property tells webpack to use its built-in optimizations accordingly
    mode: 'development',

    devtool: 'inline-source-map',

    devServer: {
        contentBase: './dist'
    }

})
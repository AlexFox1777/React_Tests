const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require('path')

module.exports = {
    // an entry point indicates which module webpack should use to begin building out its internal dependency graph
    entry: './src/index.tsx',

    // the output property tells webpack where to emit bundles it creates and how to name these files
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },

    // Loaders allow webpack to process other types of files and convert them into valid modules that can be consumed
    //  by your application and added to the dependency graph
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: 'assets/[contenthash].[ext]',
                    },
                  },
                ],
            },
        ]
    },

    plugins: [
        // clean the /dist folder before each build
        new CleanWebpackPlugin(),
        // The plugin will generate an HTML5 file that includes all bundles in the body using script tags
        new HtmlWebpackPlugin({
            template: './src/index.html',
        })
    ]

}


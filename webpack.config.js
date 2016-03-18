var path = require('path');

module.exports = {
    entry: {
        main: './public/app.js'
    },
    output: {
        path: path.join(__dirname, '/public/build'),
        publicPath: '/build/',
        filename: 'app.js'
    },
    module: {
        preLoaders: [
            { test: /\.js$/, exclude: /(node_modules)/, loader: "jshint" }
        ],
        loaders: [
            { test: /\.html$/, loader: "html" },
            { test: /\.js$/, include: /(node_modules)/, loader: "babel" },
            { test: /\.js$/, exclude: /(node_modules)/, loader: "babel" },
            { test: /\.css$/, loader: "style!css" },
            { test: /\.scss$/, loader: "style!css!sass" }
        ]
    },
    plugins: [],
    jshint: {
        esnext: true
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        publicPath: "/build/",
        historyApiFallback: true,
        proxy: {
            "/api/*": "http://localhost:3000"
        }
    },
    resolve: { 
        fallback: path.join(__dirname, "node_modules")
    },
    resolveLoader: { fallback: path.join(__dirname, "node_modules") }
};


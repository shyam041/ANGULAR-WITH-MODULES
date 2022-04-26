const path = require('path');
module.exports = {
    mode: 'development', 
    entry: __dirname+'/app/app.module.js',
    output: {
        path: __dirname+'/dist',
        filename: 'app.bundle.js',
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: { presets: ['@babel/preset-env', '@babel/preset-react'] }
        },
        // { test: /\.html$/, loader: "html" },
        // { test: /\.css$/, loader: "style!css" }
      ]
    },
    optimization: {
        minimize: false
     },
}

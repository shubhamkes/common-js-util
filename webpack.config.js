/*** webpack.config.js ***/
const path = require('path');

module.exports = {
    entry: path.join(__dirname, "src/index.js"),
    output: {
        path: path.join(__dirname, "/build"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: "babel-loader",
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [".js"]
    },
    devServer: {
        port: 3001
    }
};
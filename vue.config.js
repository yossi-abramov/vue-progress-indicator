const path = require("path");

module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/vue-progress-indicator/'
        : '/',
    outputDir: path.resolve(__dirname, "docs"),
}
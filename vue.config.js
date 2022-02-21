//const WebpackAliyunOssPlugin = require('./oss');

module.exports = {
    outputDir: 'docs',
    assetsDir:'static',
    productionSourceMap: false,

    css: {
        sourceMap: true
    },

    // configureWebpack: {
    //     plugins: [
    //         new WebpackAliyunOssPlugin({
    //             enable: false
    //         })
    //     ]
    // },

     publicPath: './'
    //publicPath:"/limingxin-shu"
};

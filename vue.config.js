// const path = require('path');
// let externals = {
//   'vue': 'Vue',
//   'element': 'ELEMENT',
//   'vue-router': 'VueRouter',
//   'vuex': 'Vuex',
//   'axios': 'axios',
//   'qiniu-js': 'qiniu',
//   'cos-js-sdk-v5': 'COS',
//   'vue-clipboard2': 'VueClipboard'
// };

module.exports = {
  lintOnSave: true,
  assetsDir: 'assets',
  //   configureWebpack: {
  //     externals
  //   },
  devServer: {
    port: 8099,
    host: '0.0.0.0',
    open: true,
    proxy: {
      '/': {
        target: 'http://192.168.31.253:8080/v1/',
        changeOrigin: true,
        ws: false,
        pathRewrite: {
          '^/': '',
        },
      },
    },
  }

//   pluginOptions: {
//     'style-resources-loader': {
//       preProcessor: 'scss',
//       patterns: [
//         path.resolve(__dirname, 'src/scss/_imports.scss')
//       ]
//     }
//   }
};

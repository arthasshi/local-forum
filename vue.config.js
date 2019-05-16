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
    port: 8081,
    host: '0.0.0.0',
    open: true,
    proxy: {
      '/': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/': '',
        },
      },
    },
  },

//   pluginOptions: {
//     'style-resources-loader': {
//       preProcessor: 'scss',
//       patterns: [
//         path.resolve(__dirname, 'src/scss/_imports.scss')
//       ]
//     }
//   }
};

const path = require('path');
const resolve = dir => path.join(__dirname, dir);
module.exports = {
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: []
    }
  },
  // const copyWebpackPlugin = require("copy-webpack-plugin");
  chainWebpack: config => {
    // alias 设置
    config.resolve.alias.set('_img', resolve('examples/assets/images'));
    // config.module
    //   .rule('js')
    //   .include.add(__dirname + 'packages')
    //   .end()
    //   .use('babel')
    //   .loader('babel-loader')
    //   .tap(options => {
    //     // 修改它的选项...
    //     return options;
    //   });
  },
  devServer: {
    open: true
  }
};

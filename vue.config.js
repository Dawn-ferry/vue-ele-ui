module.exports = {
  pages: {
    index: {
      entry: 'examples/main.js', 
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
// const copyWebpackPlugin = require("copy-webpack-plugin");
  // chainWebpack: config => {
  //   config.module
  //     .rule('js')
  //     .include.add(__dirname + 'packages') 
  //     .end()
  //     .use('babel')
  //     .loader('babel-loader')
  //     .tap(options => {
  //       // 修改它的选项...
  //       return options;
  //     });
  // }
};

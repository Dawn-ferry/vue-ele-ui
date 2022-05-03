import reTable from './reTable';
import Vue from 'vue';
const coms = [reTable];
/* 
安装 Vue.js 插件。如果插件是一个对象，必须提供 install 方法。
如果插件是一个函数，它会被作为 install 方法。install 方法调用时，会将 Vue 作为参数传入。

该方法需要在调用 new Vue() 之前被调用。

当 install 方法被同一个插件多次调用，插件将只会被安装一次。
*/

// 定义install 方法，接收Vue作为参数，如果使用use注册插件，则所有的组件都将被注册
const install = function () {
  // 判断是否安装
  if (install.installed) {
    return;
  }
  coms.forEach(com => {
    console.log('com', com);
    // 注册组件，传入一个选项对象 (自动调用 Vue.extend)
    Vue.component(com.name, com);
  });
};
// 判断是否引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
// const VueQuillEditor = { Quill, quillEditor, install }

const VueEleUI = { install };
export default VueEleUI; // 这个方法以后再使用的时候可以被use调用
// export { install };

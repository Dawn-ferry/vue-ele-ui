import reButton from './reButton';
import reInput from './reInput';
import reTable from './reTable';
import Vue from 'vue';
const coms = [reButton, reInput, reTable];
/* 

安装 Vue.js 插件。如果插件是一个对象，必须提供 install 方法。
如果插件是一个函数，它会被作为 install 方法。install 方法调用时，会将 Vue 作为参数传入。

该方法需要在调用 new Vue() 之前被调用。

当 install 方法被同一个插件多次调用，插件将只会被安装一次。
*/
// const install = Vue => {
//   // 批量注册
//   coms.map(com => {
//     // Vue.component( id, [definition] )
//     // 注册组件，传入一个选项对象 (自动调用 Vue.extend)
//     Vue.component(com.name, com);
//   });
// };
// 批量组件注册
const install = function () {
  coms.forEach(com => {
    console.log('com', com);
    Vue.component(com.name, com);
  });
};

export default install; // 这个方法以后再使用的时候可以被use调用

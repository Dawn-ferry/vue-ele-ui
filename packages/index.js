import Vue from 'vue';
import reTable from './reTable';
import './style/common.scss'

const coms = [reTable];
const install = function () {
  coms.forEach(com => {
    console.log('com', com);
    Vue.component(com.name, com);
  });
};
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

const VueEleUI = { install };
export default VueEleUI; 

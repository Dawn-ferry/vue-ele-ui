import Vue from 'vue';
import reTable from './reTable';
import reCard from './reCard';
import './style/common.scss';

const coms = [reTable, reCard];
const install = function () {
  coms.forEach(com => {
    Vue.component(com.name, com);
  });
};
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
const VueEleUI = { reCard, reTable, install };
export default VueEleUI;
export { reCard, reTable, install };

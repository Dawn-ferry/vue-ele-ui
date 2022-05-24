import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { reTable, reCard, reTagSelect } from './../packages/index';
// import VueEleUI from '../lib/vue-ele-ui.common';
// import '../lib/vue-ele-ui.css';
Vue.use(ElementUI);
// Vue.use(reTable);
Vue.use(reTagSelect);
Vue.component(reTable.name, reTable);
Vue.component(reCard.name, reCard);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app');

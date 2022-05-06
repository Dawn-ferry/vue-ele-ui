# 重构 element 部分组件

## 安装

```
npm i element-ui vue-ele-ui -S
```

## 使用
在 main.js 中写入以下内容：
```
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueEleUI from '../vue-ele-ui/vue-ele-ui.common';
import '../vue-ele-ui/vue-ele-ui.css';
import App from './App.vue';
Vue.use(ElementUI);
Vue.use(VueEleUI);
new Vue({
  el: '#app',
  render: h => h(App)
});
```

# 重构 element 部分组件

# 安装

```
npm i vue-ele-ui -S
```

# 使用

在 main.js 中写入以下内容：

```
import Vue from 'vue';
import VueEleUI from '../vue-ele-ui/vue-ele-ui.common';
import '../vue-ele-ui/vue-ele-ui.css';
import App from './App.vue';
Vue.use(VueEleUI);

new Vue({
  el: '#app',
  render: h => h(App)
});
```

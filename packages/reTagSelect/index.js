import reTagSelect from "./src/index.vue";

reTagSelect.install = function (Vue) {
  Vue.component(reTagSelect.name, reTagSelect);
};

export default reTagSelect;

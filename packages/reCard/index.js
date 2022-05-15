import reCard from './src/index.vue';

reCard.install = function (Vue) {
  Vue.component(reCard.name, reCard);
};

export default reCard;

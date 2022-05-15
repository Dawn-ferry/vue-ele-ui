<template>
  <div class="reCard" :style="width ? {width:width +'px'}:{}">
    <div class="reCard-img" :style="imgHeight?{height:imgHeight +'px'}:{}">
      <img :src="imgSrc? imgSrc: ''" alt="img" />
    </div>
    <div class="reCard-summary ellipsis-2">
      <template v-if="summary">{{summary}}</template>
      <template v-else>
        <slot></slot>
      </template>
    </div>
    <slot name="footer"></slot>
  </div>
</template>
<script>
export default {
  name: 'reCard',
  props: {
    width: {
      type: Number,
      default: 0
    },
    imgSrc: {
      type: String,
      default: ''
    },
    imgHeight: {
      type: Number,
      default: 0
    },
    summary: {
      type: String,
      default: ''
    },
    footer: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      imgSrc2: ''
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../style/reCard.scss';
</style>

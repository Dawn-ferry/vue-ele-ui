<template>
  <div class="useReCard">
    <reCard />
    <hr />
    <reCard :imgSrc="igs" :summary="info" />
    <hr />
    <reCard :imgSrc="imgs" :width="226" :imgHeight="148" :summary="info">
      <template v-slot:footer>
        <div class="footer">
          <span>1,300,017</span>
          <em>积分</em>
        </div>
      </template>
    </reCard>
  </div>
</template>
<script>
export default {
  name: 'useReCard',
  data() {
    return {
      igs: require('../../assets/images/test5.png'),
      imgs: require('_img/test5.png'),
      info: '苏州市乐营房车酒店营地两天一夜含双早&活动套票&小清新露营嘻嘻嘻～',
    }
  },
}
</script>
<style lang='scss' scoped>
.useReCard {
  .footer {
    font-size: 12px;
    margin-top: 3px;
    line-height: 14px;
    span {
      color: #f60;
      font-size: 15px;
      font-weight: 600;
      line-height: 15px;
    }
    em {
      color: rgb(102, 102, 102);
      font-style: normal;
    }
  }
}
</style>

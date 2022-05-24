<template>
  <div>
    <el-dialog :title="title" :visible="showDialog" width="30%" @close="close">
      <el-select
        v-model="selectVal"
        :collapse-tags="collapseTagsFn"
        :clearable="clearable"
        @change="changeFn($event)"
        multiple
        placeholder="请选择"
      >
        <el-option v-for="item in selectList" :key="item.value" :label="item.label" :value="item">
          <span style="color: #8492a6; font-size: 13px">{{ item.label }}</span>
        </el-option>
      </el-select>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: 'modal',
  props: ['showDialog', 'title', 'multiple', 'collapseTags', 'clearable', 'selectList'],
  data() {
    return {
      selectVal: null
    }
  },

  computed: {
    collapseTagsFn: function () {
      return this.collapseTags !== undefined
    },
    clearableFn: function () {
      return this.clearable !== undefined
    }
  },
  methods: {
    close() {
      this.$emit('close')
    },
    changeFn(val) {
      this.$emit('changeVal', val)
    }
  }
}
</script>
<style scoped>
.el-select {
  width: 100%;
}
</style>

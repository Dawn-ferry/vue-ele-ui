<template>
  <div class="Layout">
    <el-tabs type="border-card">
      <el-tab-pane label="table组件">
        <useReTable />
      </el-tab-pane>
      <el-tab-pane label="卡片组件">
        <useReCard />
      </el-tab-pane>
      <el-tab-pane label="标签选择组件">
        <useReTagSelect />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: 'Layout',
  data() {
    return {}
  },
  components: {
    useReTable: () => import('./pages/useReTable.vue'),
    useReCard: () => import('./pages/useReCard.vue'),
    useReTagSelect: () => import('./pages/useReTagSelect.vue'),
  },
}
</script>
<style lang="scss" scoped>
</style>



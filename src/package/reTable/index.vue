
<template>
  <div class="reTable">
    <div class="wrap">
      <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
        <el-table-column v-if="selectType" type="selection" width="55" />
        <el-table-column
          v-for="(item, index) in filterColums"
          :key="index"
          :prop="item.prop"
          :label="item.label"
          :width="item.width"
          :align="item.align || 'center'"
          :show-overflow-tooltip="item.isOverflow || true"
        >
          <!-- 将  scope解构成{ row, column, $index }需要处理的数据-->
          <template slot-scope="{ row, column, $index }">
            <slot name="tableBody" :scopeData="{ row, column, $index }">{{ row[item.prop] }}</slot>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
export default {
  name: 'reTable',
  props: {
    tableData: {
      type: Array,
      required: true
    },
    filterColums: {
      type: Array,
      required: true
    },
    selectType: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleSelectionChange(val) {
      this.$emit('handleSelect', val)
    }
  }
}
</script>
<style scoped>
</style>

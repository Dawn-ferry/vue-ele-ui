
<template>
  <div class="reTable page-main">
    <div class="wrap">
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        :height="height"
        :maxHeight="maxHeight"
        :border="borderFn"
        :stripe="stripeFn"
        :size="size"
        :fit="fit"
        :show-header="showHeader"
        :highlight-current-row="highlightCurrentRowFn"
        :empty-text="emptyText"
        :defaultExpandAll="defaultExpandAllFn"
        @selection-change="handleSelectionChange"
      >
        <el-table-column v-if="selectType" type="selection" width="55" />
        <el-table-column
          v-for="(item, index) in filterColums"
          :key="index"
          :prop="item.prop"
          :label="item.label"
          :width="item.width"
          :align="item.align || 'center'"
          :fixed="item.fixed"
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
      required: true,
    },
    filterColums: {
      type: Array,
      required: true,
    },
    selectType: {
      type: String,
      default: '',
    },
    height: {
      type: [String, Number],
    },
    maxHeight: {
      type: [String, Number],
    },
    stripe: {
      type: Boolean,
      default: false,
    },
    border: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: '',
    },
    fit: {
      type: Boolean,
      default: true,
    },
    showHeader: {
      type: Boolean,
      default: true,
    },
    highlightCurrentRow: {
      type: Boolean,
      default: false,
    },
    emptyText: {
      type: String,
      default: '暂无数据',
    },
    defaultExpandAll: {
      type: Boolean,
      default: false,
    },
  },
  // 处理布尔类型
  computed: {
    stripeFn: function () {
      return this.stripe !== undefined
    },
    borderFn: function () {
      return this.border !== undefined
    },
    highlightCurrentRowFn: function () {
      return this.highlightCurrentRow !== undefined
    },
    defaultExpandAllFn: function () {
      return this.defaultExpandAll !== undefined
    },
  },
  methods: {
    handleSelectionChange(val) {
      this.$emit('handleSelect', val)
    },
  },
}
</script>
<style lang="scss" scoped>
.wrap {
  height: 100%;
}
</style>


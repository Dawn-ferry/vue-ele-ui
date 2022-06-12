
<template>
  <div class="reTable page-main">
    <div class="wrap">
      <el-table
        ref="reTable"
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
        :header-cell-style="headerCellStyle"
        :highlight-current-row="highlightCurrentRowFn"
        :empty-text="emptyText"
        :defaultExpandAll="defaultExpandAllFn"
        @selection-change="selectionChange"
        @select="select"
        @select-all="selectAll"
        @cell-mouse-enter="cellMouseEnter"
        @cell-mouse-leave="cellMouseLeave"
        @cell-click="cellClick"
        @cell-dblclick="cellDblclick"
        @row-click="rowClick"
        @row-contextmenu="rowContextmenu"
        @row-dblclick="rowDblclick"
        @sort-change="sortChange"
        @filter-change="filterChange"
        @current-change="currentChange"
        @header-dragend="headerDragend"
        @expand-change="expandChange"
        @clearSelection="clearSelection"
        @toggleRowSelection="toggleRowSelection"
        @toggleAllSelection="toggleAllSelection"
        @toggleRowExpansion="toggleRowExpansion"
        @setCurrentRow="setCurrentRow"
        @clearSort="clearSort"
        @clearFilter="clearFilter"
        @doLayout="doLayout"
        @sort="sort"
      >
        <el-table-column v-if="colType.selectType" type="selection" width="55" align="center" />
        <el-table-column v-if="colType.indexType" type="index" width="55" align="center" />
        <!-- 需要特殊处理的列表放前 -->
        <slot name="beforeCol"></slot>
        <el-table-column
          v-for="(item, idx) in filterColums"
          :key="idx"
          :type="item.type"
          :index="item.index"
          :column-key="item.columnKey"
          :label="item.label"
          :prop="item.prop"
          :width="item.width"
          :min-width="item.minWidth"
          :fixed="item.fixed"
          :render-header="item.renderHeader"
          :sortable="item.sortable"
          :sort-method="item.sortMethod"
          :sort-by="item.sortBy"
          :sort-orders="item.sortOrders"
          :resizable="item.resizable"
          :formatter="item.formatter"
          :show-overflow-tooltip="item.showOverflowTooltip===undefined ? true : item.showOverflowTooltip "
          :align="item.align || 'center'"
          :header-align="item.headerAlign"
          :class-name="item.className"
          :label-class-name="item.labelClassName"
          :selectable="item.selectable"
          :reserve-selection="item.reserveSelection"
          :filters="item.filters"
          :filter-placement="item.filterPlacement"
          :filter-multiple="item.filterMultiple"
          :filter-method="item.filterMethod"
          :filtered-value="item.filteredValue"
        >
          <!-- 将  scope解构成{ row, column, $index }需要处理的数据-->
          <template slot-scope="{row, column, $index}">
            <slot name="tableBody" :scopeData="{ row, column, $index }">{{ row[item.prop] }}</slot>
          </template>
        </el-table-column>
        <!-- 默认下 -->
        <slot></slot>
        <!-- 需要特殊处理的列表放后 -->
        <slot name="afterCol"></slot>
      </el-table>
    </div>
  </div>
</template>
<script>
export default {
  name: "reTable",
  props: {
    tableData: {
      type: Array,
      required: false,
    },
    filterColums: {
      type: Array,
      required: false,
    },
    colType: {
      type: Object,
      default: () => {
        return {};
      },
    },
    height: {
      type: [String, Number],
    },
    maxHeight: {
      type: [String, Number],
    },
    stripe: Boolean,
    border: Boolean,
    size: {
      type: String,
      default: "",
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
      default: "暂无数据",
    },
    defaultExpandAll: {
      type: Boolean,
      default: false,
    },
    headerCellStyle: [Object, Function],
    // table 事件名
    selectionChange: {
      type: Function,
      default: function () {},
    },
    select: {
      type: Function,
      default: function () {},
    },
    selectAll: {
      type: Function,
      default: function () {},
    },
    cellMouseEnter: {
      type: Function,
      default: function () {},
    },
    cellMouseLeave: {
      type: Function,
      default: function () {},
    },
    cellClick: {
      type: Function,
      default: function () {},
    },
    cellDblclick: {
      type: Function,
      default: function () {},
    },
    rowClick: {
      type: Function,
      default: function () {},
    },
    rowContextmenu: {
      type: Function,
      default: function () {},
    },
    rowDblclick: {
      type: Function,
      default: function () {},
    },
    sortChange: {
      type: Function,
      default: function () {},
    },
    filterChange: {
      type: Function,
      default: function () {},
    },
    currentChange: {
      type: Function,
      default: function () {},
    },
    headerDragend: {
      type: Function,
      default: function () {},
    },
    expandChange: {
      type: Function,
      default: function () {},
    },
  },

  // 处理布尔类型
  computed: {
    stripeFn: function () {
      return this.stripe !== undefined;
    },
    borderFn: function () {
      return this.border !== undefined;
    },
    highlightCurrentRowFn: function () {
      return this.highlightCurrentRow !== undefined;
    },
    defaultExpandAllFn: function () {
      return this.defaultExpandAll !== undefined;
    },
  },
  mounted() {
    console.log("colType", this.colType);
  },
  methods: {
    showOverflowTooltip(val) {
      if (val === undefined) {
        return true; // 默认值
      } else {
        return val;
      }
    },

    toggleRowSelection(row, selected) {
      this.$refs.reTable.toggleRowSelection(row, selected);
    },

    toggleAllSelection() {
      this.$refs.reTable.toggleAllSelection();
      // this.store.commit('toggleAllSelection')
    },

    toggleRowExpansion(row, expanded) {
      this.$refs.reTable.toggleRowExpansion(row, expanded);
      // this.store.toggleRowExpansionAdapter(row, expanded)
    },

    clearSelection() {
      this.$refs.reTable.clearSelection();
    },

    setCurrentRow(row) {
      this.$refs.reTable.setCurrentRow(row);
      // this.store.commit('setCurrentRow', row)
    },

    clearSort() {
      this.$refs.reTable.clearSort();
    },

    clearFilter(columnKeys) {
      this.$refs.reTable.clearFilter(columnKeys);
    },

    doLayout() {
      this.$refs.reTable.doLayout();
      // if (this.shouldUpdateHeight) {
      //   this.layout.updateElsHeight()
      // }
      // this.layout.updateColumnsWidth()
    },

    sort(prop, order) {
      this.$refs.reTable.sort(prop, order);
      // this.store.commit('sort', { prop, order })
    },
  },
};
</script>
<style lang="scss" scoped>
.wrap {
  height: 100%;
}
</style>


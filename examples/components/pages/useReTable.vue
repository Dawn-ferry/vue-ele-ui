<template>
  <div class="useReTable">
    <reTable />
    <hr />
    <reTable
      style="width:900px"
      ref="multipleTable"
      :tableData="tableData"
      :filterColums="filterColums"
      :height="400"
      :max-height="300"
      stripe
      border
      highlight-current-row
      :header-cell-style="{ backgroundColor: '#EBEEF5' }"
      :selection-change="handleSelectionChange"
      :colType="{selectType:'selection',indexType:'index'}"
    >
      <template v-slot:beforeCol>
        <el-table-column label="需要特殊处理的列表放前" prop="tab2" width="90" />
      </template>
      <el-table-column label="默认特殊处理的列表放后" prop="tab" width="90" />
      <template v-slot:afterCol>
        <el-table-column label="需要特殊处理的列表放后" prop="tab3" width="90" />
      </template>
      <template v-slot:tableBody="{ scopeData: { row, column } }">
        <template v-if="column.property === 'enable'">
          <div v-if="row.enable === 0" style="color: #d9001b">disable</div>
          <div v-else style="color: #67c23a">enable</div>
        </template>
        <template v-else-if="column.property === 'imgCover'">
          <img v-if="row.imgCover" :src="row.imgCover" style="width: 80px; height: 80px" />
        </template>
        <!-- address -->
        <template v-else-if="column.property === 'address'">
          <template :show-overflow-tooltip="false">{{row.address}}</template>
        </template>

        <template v-else-if="column.property === 'effectiveDate'">{{ row.date }}~{{ row.endDate }}</template>
        <template v-else-if="column.property === 'edit'">
          <el-button type="text" size="small" @click="openFn(row)">open</el-button>
          <el-button type="text" size="small" @click="editFn(row)">edit</el-button>
        </template>
        <!-- <template v-else>{{ row[column.property] }}</template> -->
      </template>
    </reTable>
    <div style="margin-top: 20px">
      <el-button @click="toggleSelection([tableData[1], tableData[2]])">切换第二、第三行的选中状态</el-button>
      <el-button @click="toggleSelection()">取消选择</el-button>
      <el-button @click="toggleAllSelection()">All选择</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "useReTable",
  data() {
    return {
      sortData: ["age"],
      filterColums: [
        {
          prop: "enable",
          label: "是否禁用",
        },
        {
          prop: "province",
          label: "省份",
        },
        {
          prop: "city",
          label: "市区",
        },
        {
          prop: "address",
          label: "地址",
          showOverflowTooltip: false,
        },
        {
          prop: "zip",
          label: "邮编",
        },
        {
          prop: "age",
          label: "年龄",
        },
        {
          prop: "effectiveDate",
          label: "有效日期",
        },
        {
          prop: "imgCover",
          label: "封面",
          width: "180",
        },
        {
          label: "操作",
          prop: "edit",
          fixed: "right",
          width: "180",
        },
      ],
      tableData: [
        {
          date: "2016-05-02",
          endDate: "2020-02-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
          age: 12,
          enable: 1,
          imgCover: "https://tva1.sinaimg.cn/large/9bd9b167gy1g2qkwm4hsoj21hc0u04qp.jpg",
        },
        {
          date: "2016-05-04",
          endDate: "2020-06-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1517 弄",
          zip: 200333,
          age: 22,
          enable: 1,
          imgCover: `https://tva1.sinaimg.cn/large/9bd9b167gy1g2qkwm4hsoj21hc0u04qp.jpg`,
        },

        {
          date: "2016-05-01",
          endDate: "2021-01-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1519 弄",
          zip: 200333,
          age: 9,
          enable: 0,
          imgCover: "https://tva1.sinaimg.cn/large/9bd9b167gy1g2qkwm4hsoj21hc0u04qp.jpg",
        },

        {
          date: "2016-05-03",
          endDate: "2021-10-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: 200333,
          age: 2,
          enable: 0,
          imgCover: "",
        },
      ],
    };
  },
  mounted() {},
  methods: {
    toggleAllSelection() {
      this.$refs.multipleTable.toggleAllSelection();
    },
    toggleSelection(rows) {
      console.log("toggleSelection", rows);
      if (rows) {
        rows.forEach((row) => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    openFn(val) {
      console.log("openFn", val);
    },
    editFn(val) {
      console.log("editFn", val);
    },
    handleSelectionChange(val) {
      console.log("handleSelectFn ", val);
    },
  },
};
</script>


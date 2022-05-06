<template>
  <div id="app">
    <!-- <reButton />
    <reTable />-->
    <el-button type="success">成功按钮</el-button>
    <!-- 使用 -->
    <reTable ref="multipleTable" :tableData="tableData" :filterColums="filterColums" selectType="selection" @handleSelect="handleSelectFn">
      <template v-slot:tableBody="{ scopeData: { row, column } }">
        <template v-if="column.property === 'enable'">
          <div v-if="row.enable === 0" style="color: #d9001b">禁用</div>
          <div v-else style="color: #67c23a">启用</div>
        </template>
        <template v-else-if="column.property === 'imgCover'">
          <img v-if="row.imgCover" :src="row.imgCover" style="width: 80px; height: 80px" />
        </template>
        <template v-else-if="column.property === 'effectiveDate'">{{ row.date }}~{{ row.endDate }}</template>
        <template v-else-if="column.property === 'edit'">
          <el-button type="text" size="small" @click="openFn(row)">查看</el-button>
          <el-button type="text" size="small" @click="editFn(row)">编辑</el-button>
        </template>
        <template v-else>{{ row[column.property] }}</template>
      </template>
    </reTable>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      // 需要排序的字段
      sortData: ['age'],
      // filterColums:[],
      filterColums: [
        // 不需要展示的数据
        // {
        //   prop: 'date',
        //   label: '日期',
        // },
        // {
        //   prop: 'name',
        //   label: '姓名',
        //   key: 1,
        // },
        // 需要展示的数据
        {
          prop: 'enable',
          label: '是否禁用'
        },
        {
          prop: 'province',
          label: '省份'
        },
        {
          prop: 'city',
          label: '市区'
        },
        {
          prop: 'address',
          label: '地址'
        },
        {
          prop: 'zip',
          label: '邮编'
        },
        {
          prop: 'age',
          label: '年龄'
        },
        {
          prop: 'effectiveDate',
          label: '有效日期'
        },
        {
          prop: 'imgCover',
          label: '封面',
          width: '180'
        },
        {
          label: '操作',
          prop: 'edit',
          fixed: 'right',
          width: '180'
        }
      ],
      tableData: [
        {
          date: '2016-05-02',
          endDate: '2020-02-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          age: 12,
          enable: 1,
          imgCover: 'https://tva1.sinaimg.cn/large/9bd9b167gy1g2qkwm4hsoj21hc0u04qp.jpg'
        },
        {
          date: '2016-05-04',
          endDate: '2020-06-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1517 弄',
          zip: 200333,
          age: 22,
          enable: 1,
          imgCover: `https://tva1.sinaimg.cn/large/9bd9b167gy1g2qkwm4hsoj21hc0u04qp.jpg`
        },

        {
          date: '2016-05-01',
          endDate: '2021-01-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1519 弄',
          zip: 200333,
          age: 9,
          enable: 0,
          imgCover: 'https://tva1.sinaimg.cn/large/9bd9b167gy1g2qkwm4hsoj21hc0u04qp.jpg'
        },

        {
          date: '2016-05-03',
          endDate: '2021-10-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1516 弄',
          zip: 200333,
          age: 2,
          enable: 0,
          imgCover: ''
        }
      ]
    }
  },
  mounted() {},
  methods: {
    toggleSelection() {
      console.log('this.$refs.multipleTable', this.$refs.multipleTable)
      // if (rows) {
      //   rows.forEach((row) => {
      //     this.$refs.multipleTable.toggleRowSelection(row);
      //   });
      // } else {
      //   this.$refs.multipleTable.clearSelection();
      // }
    },
    openFn(val) {
      console.log('查看操作', val)
    },
    editFn(val) {
      console.log('编辑操作', val)
    },
    handleSelectFn(val) {
      console.log('获取组件选择数据 ', val)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

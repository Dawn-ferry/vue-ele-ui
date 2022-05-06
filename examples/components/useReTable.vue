<template>
  <div class="useReTable">
    <reTable ref="multipleTable" :tableData="tableData" :filterColums="filterColums" selectType="selection" @handleSelect="handleSelectFn">
      <template v-slot:tableBody="{ scopeData: { row, column } }">
        <template v-if="column.property === 'enable'">
          <div v-if="row.enable === 0" style="color: #d9001b">disable</div>
          <div v-else style="color: #67c23a">enable</div>
        </template>
        <template v-else-if="column.property === 'imgCover'">
          <img v-if="row.imgCover" :src="row.imgCover" style="width: 80px; height: 80px" />
        </template>
        <template v-else-if="column.property === 'effectiveDate'">{{ row.date }}~{{ row.endDate }}</template>
        <template v-else-if="column.property === 'edit'">
          <el-button type="text" size="small" @click="openFn(row)">open</el-button>
          <el-button type="text" size="small" @click="editFn(row)">edit</el-button>
        </template>
        <template v-else>{{ row[column.property] }}</template>
      </template>
    </reTable>
  </div>
</template>

<script>

export default {
  name: 'useReTable',
  data() {
    return {
      sortData: ['age'],
      filterColums: [
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
    },
    openFn(val) {
      console.log('openFn', val)
    },
    editFn(val) {
      console.log('editFn', val)
    },
    handleSelectFn(val) {
      console.log('handleSelectFn ', val)
    }
  }
}
</script>


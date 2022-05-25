<template>
  <div id="app">
    <useReTable />
    <useReCard />

    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="站点" prop="sitelist">
        <reTagSelect
          class="tagSelect"
          :selectTitle="selectTitle"
          :selectList="ProvideData"
          clearable
          collapseTags
          @setData="setData"
          v-model="ruleForm.sitelist"
        >站点</reTagSelect>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
      </el-form-item>
    </el-form>
    <div class="footer"></div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      ProvideData: [
        {
          value: '选项1',
          label: '黄金糕',
        },
        {
          value: '选项2',
          label: '双皮奶',
        },
        {
          value: '选项3',
          label: '蚵仔煎',
        },
        {
          value: '选项4',
          label: '龙须面',
        },
        {
          value: '选项5',
          label: '北京烤鸭',
        },
      ],
      ruleForm: {
        sitelist: [],
      },
      selectTitle: '关联站点(可多选)',
      rules: {
        sitelist: [{ type: 'array', required: true, message: '请选择', trigger: ['change', 'blur'] }],
      },
    }
  },

  components: {
    useReTable: () => import('./components/useReTable.vue'),
    useReCard: () => import('./components/useReCard.vue'),
  },
  methods: {
    changeFn(val) {
      console.log('va22l', val)
    },
    setData(val) {
      this.ruleForm.sitelist = val
    },
    submitForm(formName) {
      console.log('t', this.ruleForm)
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
  },
}
</script>
<style scoped>
.demo-ruleForm {
  margin: 500px 0;
}
.footer {
  height: 500px;
}
</style>


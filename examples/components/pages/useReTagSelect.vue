<template>
  <div class="useReTagSelect">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
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
  </div>
</template>
<script>
export default {
  name: 'useReTagSelect',
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
      rules: {
        sitelist: [{ type: 'array', required: true, message: '请选择', trigger: ['change', 'blur'] }],
      },
      selectTitle: '关联站点(可多选)',
      ruleForm: {
        sitelist: [],
      },
    }
  },
  methods: {
    setData(val) {
      this.ruleForm.sitelist = val
    },
    submitForm(formName) {
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
</style>

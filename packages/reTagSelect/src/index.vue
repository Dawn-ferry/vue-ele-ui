<template>
  <div class="reTagSelect">
    <draggable v-model="setTagList">
      <transition-group>
        <el-tag v-for="(tag,index) in setTagList" :key="index" closable @close="tagClose(tag, 'setTagList')">{{tag.label}}</el-tag>
      </transition-group>
    </draggable>
    <el-button class="el-icon-edit" type="primary" @click="isShow=true">
      <slot></slot>
    </el-button>
    <!--v-if 为了初始化  
    v-if="isShow"-->
    <modal
      :title="selectTitle"
      :selectList="selectList"
      :showDialog="isShow"
      @close="isShow = false"
      @changeVal="changeVal"
      :collapseTags="collapseTags"
      :clearable="clearable"
    />
  </div>
</template>
<script>
import draggable from 'vuedraggable'
export default {
  name: 'reTagSelect',
  components: {
    draggable,
    modal: () => import('./modal.vue')
  },
  props: {
    clearable: String,
    collapseTags: String,
    selectList: {
      type: Array,
      default: () => [],
      required: true
    },
    selectTitle: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      setTagList: null,
      isShow: false
    }
  },
  methods: {
    changeVal(val) {
      console.log('changeVal', val)
      this.$emit('selectChange', val)
      this.$emit('setData', val)
      this.setTagList = val //类型必须是Array
    },
    tagClose(tag, target) {
      this[target].splice(this[target].indexOf(tag), 1)
    }
  }
}
</script>
<style lang="scss" scoped>
.reTagSelect {
  display: flex;
}

.el-tag {
  margin: 0 5px;
}
</style>


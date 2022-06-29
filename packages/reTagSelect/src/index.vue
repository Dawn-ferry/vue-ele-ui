<template>
  <div class="reTagSelect">
    <draggable v-model="setTagList">
      <!--:key="index"  -->
      <!-- 因为要考虑到多种情况如果index多级的话，则会发生冲突，所以transition-group做了一个警告检查，将index换为内容的   -->
      <transition-group>
        <el-tag v-for="(tag,index) in setTagList" :key="tag" closable @close="tagClose(tag, 'setTagList')">{{tag.label}} {{index}}</el-tag>
      </transition-group>
    </draggable>
    <el-button class="el-icon-edit" type="primary" @click="isShow=true">
      <slot></slot>
    </el-button>
    <!--v-if 为了初始化  -->
    <modal
      v-if="isShow"
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
import draggable from "vuedraggable";
export default {
  name: "reTagSelect",
  components: {
    draggable,
    modal: () => import("./modal.vue"),
  },
  props: {
    clearable: String,
    collapseTags: String,
    selectList: {
      type: Array,
      default: () => [],
      required: true,
    },
    selectTitle: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      setTagList: null,
      isShow: false,
    };
  },
  methods: {
    changeVal(val) {
      this.$emit("selectChange", val);
      this.$emit("setData", val);
      this.setTagList = val; //类型必须是Array
    },
    tagClose(tag, target) {
      this[target].splice(this[target].indexOf(tag), 1);
    },
  },
};
</script>
<style lang="scss" scoped>
.reTagSelect {
  display: flex;
}

.el-tag {
  margin: 0 5px;
}
</style>


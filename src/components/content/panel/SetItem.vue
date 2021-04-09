<!--
  SetItem 可以标记是否选中，也可以只显示标签
  SetItem 可以输入，也可以下拉选择
 -->
<template>
  <div class="set-item">
    <el-checkbox v-if="isShowChecked" v-model="dataObj.checked" :label="dataObj.label + '：'" />
    <div v-else class="d-label">{{dataObj.label}}：</div>
    <el-input v-if="dataObj.type === 2" v-model="dataObj.value" />
    <el-select v-if="dataObj.type === 1" v-model="dataObj.value">
      <el-option
        v-for="(item, key) in dataObj.options"
        :key="key"
        :label="item"
        :value="key"
      />
    </el-select>
  </div>
</template>

<script>
export default {
  name: "SetItem",
  props: {
    dataObj: {
      type: Object,
      default: () => {},
    },
    isShowChecked: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.set-item {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .el-checkbox, .d-label {
    margin-right: 10px;
    white-space: nowrap;
  }

  .el-input, .el-select {
    width: 200px;
  }
}
</style>
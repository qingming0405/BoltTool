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
      default: true
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
}
</style>
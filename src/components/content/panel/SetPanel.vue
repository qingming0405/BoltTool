<template>
  <div class="set-panel">
    <div v-if="isShowHead" class="head">
      {{ panelObj.title }}
    </div>
    <div class="body">
      <set-item class="set-item" :isShowChecked="isShowChecked"
        v-for="(item, key) in panelObj.configs"
        :key="key"
        :dataObj="item"
      />
    </div>
  </div>
</template>

<script>
import SetItem from "./SetItem.vue";
export default {
  components: { SetItem },
  name: "SetPanel",
  props: {
    panelObj: {
      type: Object,
      default: () => {},
    },
    isShowHead: {
      type: Boolean,
      default: true
    },
    isShowChecked: {
      type: Boolean,
      default: true
    }
  },
  mounted() {
    // console.log(this.panelObj);
  }
};
</script>

<style lang="scss" scoped>
.set-panel {
  margin: 10px 15px;
  border: #ddd solid 1px;
  border-radius: 5px;
  color: #333;
  font-size: 12px;
  .head {
    padding: 10px 15px;
    background: #f5f5f5;
    border-bottom: 1px solid transparent;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
  }
  .body {
    padding: 15px;
    .set-item {
      margin: 10px 0px;
    }
  }
}
</style>
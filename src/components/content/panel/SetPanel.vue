<!--
  SetPanel包含标题、配置项列表
  SetPanel可以配置各项是否选中
  SetPanel不包含footer
 -->
<template>
  <panel class="set-panel" :panelObj="panelObj" :isShowHeader="isShowHead">
    <set-item class="set-item" :isShowChecked="isShowChecked"
      v-for="(item, key) in panelObj.configs"
      :key="key"
      :dataObj="item"
    />
  </panel>
</template>

<script>
import Panel from './Panel.vue';
import SetItem from "./SetItem.vue";
export default {
  components: { SetItem, Panel },
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
      default: false
    }
  },
  mounted() {
    // console.log(this.panelObj);
  }
};
</script>

<style lang="scss" scoped>
.set-panel {
  .main {
    .set-item {
      margin: 10px 0px;
    }
  }
}
</style>
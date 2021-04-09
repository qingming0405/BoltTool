<template>
  <panel class="set-panel" :panelObj="panelObj" :isShowHeader="isShowHead">
    <div class="main">
      <set-item class="set-item" :isShowChecked="isShowChecked"
        v-for="(item, key) in panelObj.configs"
        :key="key"
        :dataObj="item"
      />
    </div>
  </panel>
  <!-- <div class="set-panel">
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
  </div> -->
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
  .main {
    .set-item {
      margin: 10px 0px;
    }
  }
}
</style>
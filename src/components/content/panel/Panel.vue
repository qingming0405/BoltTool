<template>
  <div class="panel">
    <div class="header" v-if="isShowHeader">
      <slot name="header">{{ panelObj.title }}</slot>
    </div>
    <div class="main">
      <slot></slot>
    </div>
    <div class="footer" v-if="isShowFooter">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Panel',
  props: {
    panelObj: {
      type: Object,
      default: () => {},
    },
    isShowHeader: {
      type: Boolean,
      default: true
    },
    isShowFooter: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.panel {
  margin: 10px 10px;
  border: 1px solid #EBEEF5;
  border-radius: 4px;
  background-color: #FFF;
  color: #303133;
  transition: .3s;
  overflow: hidden;

  box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
  
  .header {
    padding: 18px 20px;
    border-bottom: 1px solid #EBEEF5;
    box-sizing: border-box;
  }
  .main {
    padding: 15px;
  }
  .footer{
    height: 50px;
  }
}
</style>
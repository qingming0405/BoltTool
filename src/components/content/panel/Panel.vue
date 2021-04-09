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
  margin: 10px 15px;
  border: #ddd solid 1px;
  border-radius: 4px;
  color: #333;
  font-size: 12px;
  .header {
    padding: 10px 15px;
    background: #f5f5f5;
    border-bottom: 1px solid transparent;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
  }
  .main {
    padding: 15px;
  }
  .footer{
    height: 50px;
  }
}
</style>
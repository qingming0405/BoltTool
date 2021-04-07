<template>
  <div id="aside">
    <set-panel :panelObj="dguParams"/>
  </div>
</template>

<script>
import SetPanel from '../panel/SetPanel.vue'
export default {
  components: { SetPanel },
  name: 'Aside',
  data() {
    return {
      dguParams: {}, // DGU参数
      
    }
  }
}
</script>

<style>

</style>
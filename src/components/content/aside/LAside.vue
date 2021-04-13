<template>
  <div class="laside">
    <set-panel :panelObj="$store.state.aside.dguParams"/>
    <set-panel :panelObj="$store.state.aside.always" :isShowHead="false"/>
  </div>
</template>

<script>
import SetPanel from '../panel/SetPanel.vue'
export default {
  components: {
    SetPanel 
  },
  name: 'LAside',
  data() {
    return {
      
    }
  },
  mounted() {
    
  },
  methods: {
    
  }
}
</script>

<style lang="scss" scoped>
.laside {
  width: 300px;
  font-size: 12px;

}
</style>
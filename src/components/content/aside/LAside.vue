<template>
  <div id="laside">
    <set-panel :panelObj="$store.state.aside.dguParams" :isShowChecked="false"/>
    <set-panel :panelObj="$store.state.aside.always" :isShowHead="false" :isShowChecked="false"/>
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

<style>
#aside {
  width: 300px;
}
</style>
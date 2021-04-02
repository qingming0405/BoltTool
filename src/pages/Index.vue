<template>
  <div id="index">
    <top/>
    <left/>

  </div>
</template>

<script>
import Left from 'views/left/Left.vue'
import Top from 'views/top/Top.vue'
export default {
  components: { 
    Top,
    Left
  },
  name: 'Index'
}
</script>

<style>

</style>
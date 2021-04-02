<template>
  <div id="top">
    <div>aaaaaaaaaaaaaaaaaa</div>
    <div>{{test}}</div>
  </div>
</template>

<script>
export default {
  name: 'Top',
  data() {
    return {
      test: '',
      menuList: [],
    }
  },
  mounted() {
    this.test = paramsSet
  }
}
</script>

<style>

</style>
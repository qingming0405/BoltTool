<template>
  <div id="index">
    <div class="header-wrapper">
      <top/>
    </div>
    <div class="body-wrapper">
      <div class="left-wrapper" v-show="false">
        <left class="left"/>
      </div>
      <div class="main-wrapper">
        <keep-alive>
          <router-view/>
        </keep-alive>
      </div>
      
    </div>
  </div>
</template>

<script>
import Top from 'views/top/Top.vue'
import Left from 'views/left/Left.vue'
export default {
  components: { 
    Top,
    Left
  },
  name: 'Index'
}
</script>

<style lang="scss" scoped>
#index {
  height: calc(100vh - 20px);

  .body-wrapper {
    height: calc(100% - 60px);

    display: flex;

    .left-wrapper {
      width: 200px;
    }
    .main-wrapper {
      flex: 1;
    }
  }
}
</style>
<template>
  <!-- <div id="index"> -->
    <el-container>
      <el-header>
        <top/>
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  <!-- </div> -->
</template>

<script>
import Top from 'views/top/Top.vue'
export default {
  components: { 
    Top,
  },
  name: 'Index'
}
</script>

<style>

</style>
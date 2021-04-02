<template>
  <div id="index">
    <el-container>
      <el-header>
        <top/>
      </el-header>
      <el-aside>
        <left/>
      </el-aside>
      <el-main>
        
      </el-main>
    </el-container>
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
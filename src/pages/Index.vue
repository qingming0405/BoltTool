<template>
  <!-- <div id="index"> -->
    <el-container>
      <!-- 顶部菜单栏 -->
      <el-header>
        <top/>
      </el-header>
      <el-container>
        <!-- 左侧螺栓列表 -->
        <el-aside width="200px">
          <left/>
        </el-aside>
        <!-- 主视图 -->
        <el-main>
          <keep-alive>
            <router-view/>
          </keep-alive>
        </el-main>
      </el-container>
    </el-container>
  <!-- </div> -->
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

<style>

</style>
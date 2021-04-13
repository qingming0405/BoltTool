<template>
  <div id="contact">
    <h1 class="h1">联系我们</h1>
    <el-divider/>
    <p>
      <b>联系电话：</b>
      <span>0571-28995840</span>
    </p>
    <el-divider/>
    <p>
      <b>传    真：</b>
      <span>0571-28995841</span>
    </p>
    <el-divider/>
    <p>
      <b>公司地址：</b>
      <span>浙江省杭州经济技术开发区6号路260号中自科技园 </span><br>
      <b style="visibility: hidden">网站地址：</b><span>www.windit.com.cn</span>
    </p>
    <el-divider/>
  </div>
</template>

<script>
export default {
  name: 'Contact'
}
</script>

<style lang="scss" scoped>
#contact {
  border: solid 1px #ddd;
  border-radius: 4px;
  padding: 15px;
  height: calc(100% - 32px);
}
</style>
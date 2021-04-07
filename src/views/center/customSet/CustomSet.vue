<template>
  <div id="custom-set">
    <div class="body">
      <set-panel :panelObj="globalRun"/>
      <set-panel :panelObj="AScan"/>
      <set-panel :panelObj="signalReceive"/>
    </div>
    <div class="foot">
      <el-button type="primary" round>保存设置</el-button>
    </div>
  </div>
</template>

<script>
import SetPanel from 'components/content/panel/SetPanel.vue'
export default {
  components: { SetPanel },
  name: 'CustomSet',
  data() {
    return {
      globalRun: {}, //全局运行参数
      signalReceive: {}, //信号接收设置
      AScan: {}, //AScan
    }
  },
  created() {
    this.getAllConfig()
  },
  methods: {
    getAllConfig() {
      this.globalRun = config.paramsSet.globalRun
      this.signalReceive = config.paramsSet.signalReceive
      this.AScan = config.paramsSet.AScan
    }
  }
}
</script>

<style lang="scss" scoped>
  #custom-set {
    border: solid 1px #ddd;
    border-radius: 4px;
    padding: 15px;
    .body {
      display: flex;  
      flex-wrap: wrap;
      justify-content: space-around;
    }
    .foot {
      display: flex;
      justify-content: center;

      padding: 10px;
    }
  }
</style>
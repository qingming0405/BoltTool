<template>
  <div id="custom-set">
    <l-aside ref="laside"/>
    <div class="main">
      <div class="body">
        <set-panel :panelObj="globalRun" :isShowChecked="true"/>
        <set-panel :panelObj="AScan" :isShowChecked="true"/>
        <set-panel :panelObj="signalReceive" :isShowChecked="true"/>
      </div>
      <div class="foot">
        <el-button type="primary" round @click="saveClick">保存设置</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import SetPanel from 'components/content/panel/SetPanel.vue'
import LAside from 'components/content/aside/LAside.vue'

export default {
  components: { 
    SetPanel,
    LAside,
  },
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
    // 获取所有配置
    getAllConfig() {
      this.globalRun = config.paramsSet.globalRun
      this.signalReceive = config.paramsSet.signalReceive
      this.AScan = config.paramsSet.AScan
    },
    // 保存设置
    saveClick() {
      this.$store.commit('setCh', 3000)
      const dguParams = this.$store.state.aside.dguParams
      console.log(dguParams.configs.ch.value);
    }
  }
}
</script>

<style lang="scss" scoped>
  #custom-set {
    display: flex;
    flex-direction: row;

    height: 100%;

    .main {
      flex: 1;
      border: solid 1px #ddd;
      border-radius: 4px;
      padding: 15px;
      height: calc(100% - 32px);

      .body {
        display: flex;  
        flex-wrap: wrap;
        justify-content: center;
      }
      .foot {
        display: flex;
        justify-content: center;

        padding: 10px;
      }
    }
  }
</style>
<template>
  <div id="dgu-set">
    <!-- 服务器设置 -->
    <panel class="panel-dgu-set" :panelObj="serverObj">
      <div class="main">
        <set-item class="set-item"
          v-for="(item, key) in serverObj.configs"
          :key="key"
          :dataObj="item"
        />
      </div>
      <div class="footer">
        <el-button type="primary" round >确定</el-button>
      </div>
    </panel>
    <!-- DGU列表 -->
    <el-card class="dgu-box">
      <div slot="header" class="clearfix">
        <span>DGU列表</span>
        <el-button class="btn-refresh" type="text">刷新列表</el-button>
      </div>
      <div class="dgu-item" v-for="dgu in dguList" :key="dgu">
        {{dgu}}
      </div>
    </el-card>
  </div>
</template>

<script>
import Panel from 'components/content/panel/Panel.vue'
import SetItem from 'components/content/panel/SetItem.vue'

export default {
  name: 'DguSet',
  components: {
    Panel,
    SetItem
  },
  data() {
    return {
      serverObj: {
        title: "服务器设置",
        configs: {}
      },
      dguList: ["10.100.0.1","10.100.0.2","10.100.0.3"]
    }
  }
}
</script>

<style lang="scss" scoped>
#dgu-set {
  display: flex;
  flex-direction: column;
  align-items: center;

  border: solid 1px #ddd;
  border-radius: 4px;
  padding: 15px;

  .panel-dgu-set {
    width: 420px;
  }

  .dgu-box {
    margin-top: 10px;
    width: 420px;
    min-height: 280px;

    .clearfix {
      .btn-refresh {
        float: right; 
        padding: 3px 0
      }
      &:before,
      &:after {
        display: table;
        content: "";
      }
      &:after {
        clear: both
      }
    }
    
    .dgu-item {
      margin-bottom: 18px;
    }
  }
}
</style>
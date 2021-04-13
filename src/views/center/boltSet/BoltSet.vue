<template>
  <div id="bolt-set">
    <!-- 螺栓设置 -->
    <panel class="panel-bolt-set" :panelObj="boltObj">
      <div class="main">
        <set-item class="set-item"
          v-for="(item, key) in boltObj.configs"
          :key="key"
          :dataObj="item"
        />
      </div>
      <div class="footer">
        <el-button type="primary" round >保存</el-button>
      </div>
    </panel>
    <!-- 螺栓规格列表 -->
    <el-card class="model-box">
      <div slot="header" class="clearfix">
        <span>规格列表</span>
      </div>
      <div class="model-item">
        <div class="model-col1 head">型号名称</div>
        <div class="model-col2 head">操作</div>
      </div>
      <div class="model-body">
        <div class="model-item" v-for="(model, index) in modelList" :key="index">
          <div class="model-col1">
            <div>型号：{{model.modelName}}</div>
            <div>总长：{{model.totalLen}}</div>
            <div>标称长度：{{model.standardLen}}</div>
            <div>直径：{{model.diameter}}</div>
            <div>夹紧长度：{{model.clampLen}}</div>
            <div>螺纹长度：{{model.threadLen}}</div>
          </div>
          <div class="model-col2">
            <el-button type="primary" icon="el-icon-edit" circle></el-button>
            <el-button type="danger" icon="el-icon-delete" circle></el-button>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
import Panel from 'components/content/panel/Panel.vue'
import SetItem from 'components/content/panel/SetItem.vue'
export default {
  name: 'BoltSet',
  components: {
    Panel,
    SetItem,
    
  },
  data() {
    return {
      boltObj: {
        title: "螺栓配置",
        configs: {
          modelName: { checked: false, type: 2, label: "型号名称", value: "" },
          totalLen: { checked: false, type: 2, label: "总长 mm", value: "420" },
          standardLen: { checked: false, type: 2, label: "标称长度 mm", value: "400" },
          diameter: { checked: false, type: 2, label: "螺栓直径 mm", value: "64" },
          clampLen: { checked: false, type: 2, label: "夹紧长度 mm", value: "285" },
          threadLen: { checked: false, type: 2, label: "螺纹长度 mm", value: "50" },
        }
      },
      modelList: [
        {modelName: '螺栓1', totalLen: 420, standardLen: 400, diameter: 60, clampLen: 440, threadLen: 50},
        {modelName: '螺栓2', totalLen: 420, standardLen: 400, diameter: 60, clampLen: 440, threadLen: 50},
        {modelName: '螺栓3', totalLen: 420, standardLen: 400, diameter: 60, clampLen: 440, threadLen: 50},
        {modelName: '螺栓4', totalLen: 420, standardLen: 400, diameter: 60, clampLen: 440, threadLen: 50},
        {modelName: '螺栓5', totalLen: 420, standardLen: 400, diameter: 60, clampLen: 440, threadLen: 50},
        {modelName: '螺栓6', totalLen: 420, standardLen: 400, diameter: 60, clampLen: 440, threadLen: 50},
        {modelName: '螺栓7', totalLen: 420, standardLen: 400, diameter: 60, clampLen: 440, threadLen: 50},
      ] // 螺栓规格列表
    }
  }
}
</script>

<style lang="scss" scoped>
#bolt-set {
  display: flex;
  justify-content: center;

  border: solid 1px #ddd;
  border-radius: 4px;
  padding: 15px;
  height: calc(100% - 32px);

  .panel-bolt-set {
    margin: 0px 10px;
    width: 420px;
    // height: 100%;

    .main {
      .set-item {
        margin-bottom: 10px;
      }
    }
    
    .footer {
      display: flex;
      justify-content: center;
    }
  }

  .model-box {
    width: 420px;
    // height: 100%;

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
    
    .model-item {
      display: flex;
      .model-col1, .model-col2 {
        flex: 1;
        padding: 5px;
        border-right: 1px solid #EBEEF5; 
        border-bottom: 1px solid #EBEEF5;      
      }
      .head, .model-col2 {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .model-col1{
        border-left: 1px solid #EBEEF5;
      }
      .head{
        border-top: 1px solid #EBEEF5;
      }
    }
    
    .model-body {
      height: calc(100vh - 300px);

      overflow-x: hidden;
      scrollbar-width: none;
      -ms-overflow-style: none;

      &::-webkit-scrollbar{
        display: none;
      }
    }
  }
}
</style>
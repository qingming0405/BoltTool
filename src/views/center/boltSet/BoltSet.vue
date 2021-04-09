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
        <div class="model-col1">型号名称</div>
        <div class="model-col2">操作</div>
      </div>
      <div class="model-item" v-for="model in modelList" :key="model">
        <div class="model-col1">
          <div>型号：{{model.name}}</div>
          <div>总长：{{model.totalLen}}</div>
          <div>标称长度：{{model.standardLen}}</div>
          <div>直径：{{model.diameter}}</div>
          <div>夹紧长度：{{model.clampLen}}</div>
        </div>
        <div class="model-col2">
          <el-button type="primary" icon="el-icon-edit" circle></el-button>
          <el-button type="danger" icon="el-icon-delete" circle></el-button>
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
          modelName: { checked: false, type: 2, label: "规格名称", value: "" },
          totalLen: { checked: false, type: 2, label: "总长", value: "420" },
          standardLen: { checked: false, type: 2, label: "标称长度", value: "400" },
          diameter: { checked: false, type: 2, label: "螺栓直径", value: "64" },
          clampLen: { checked: false, type: 2, label: "夹紧长度", value: "285" },
          threadLen: { checked: false, type: 2, label: "螺纹长度", value: "0" },
        }
      },
      modelList: [] // 螺栓规格列表
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

  .panel-bolt-set {
    width: 420px;

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
    margin-top: 10px;
    width: 420px;

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
      margin-bottom: 18px;
    }
  }
}
</style>
<template>
  <div id="wave">
    <l-aside ref="laside"/>
    <div class="main">
      <div class="body">
        <div class="waves chart" ref="waves">
          
        </div>
      </div>
      <div class="foot">
        <el-button type="primary" round @click="saveClick">保存设置</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import LAside from 'components/content/aside/LAside.vue'
import {createChart} from 'components/common/lecharts/lecharts.js'

export default {
  components: { 
    LAside 
  },
  name: 'Wave',
  data() {
    return  {

    }
  },
  mounted() {
    this.createChart()
  },
  methods: {
    createChart() {
      const dom = this.$refs.waves
      const option = {
        title: {
          text: 'Echarts 入门'
        },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20],
          markLine: {
            data: [{
              name: '平均线',
              type: 'average'
            }],
            lineStyle: {
              width: 3,
              type: 'solid'
            }
          }
        }]
      }
      this.myChart = createChart(dom, option)
    },
    /**事件 */
    saveClick() {

    }
  }
}
</script>

<style lang="scss" scoped>
#wave {
  display: flex;
  flex-direction: row;

  height: 100%;

  .main {
    flex: 1;

    border: solid 1px #ddd;
    border-radius: 4px;
    padding: 15px;
    .body {
      display: flex;  
      flex-wrap: wrap;
      justify-content: space-around;

      height: calc(100% - 60px);

      .chart{
        flex: 1;
      }
    }
    .foot {
      display: flex;
      justify-content: center;

      padding: 10px;
      border: 1px solid #EBEEF5;
    }
  }
}

</style>
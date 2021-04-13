import * as echarts from 'echarts'

// 创建echarts图表
export function createChart(dom, option) {
  const myChart = echarts.init(dom)
  myChart.setOption(option)
  return myChart
}


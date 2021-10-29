<template>
  <div>
    <div :style="{ minHeight: '30px', background: '#f0f2f5'}">
      <a-breadcrumb>
        <a-breadcrumb-item>antd</a-breadcrumb-item>
        <a-breadcrumb-item>Bar</a-breadcrumb-item>
      </a-breadcrumb>
    </div>
    <div :style="{ margin: '24px', background: '#fff'}">
     <div id="chart" :style="{ width: '430px', height: '300px'}">chart</div>
    </div>
  </div>
</template>

<script>
// 全局引入
import * as echarts from 'echarts';
export default {
  data () {
    return {}
  },
  mounted () {
    this.showChart();
  },
  methods: {
    showChart () {
      var myChart = echarts.init(document.getElementById("chart"));
      console.log('hehe');
      myChart.setOption({
      title: { text: "一个简单的直方图" },
      tooltip: {},
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
      },
      yAxis: {},
      series: [
        {
          name: "销量",
          type: "bar",
          data: [5, 20, 36, 10, 10, 20]
          }
        ]
      });
    }
  }
}
</script>

<template>
  <div class="chartView">
    <div ref="itemElevenChart" class="itemElevenChart"></div>
  </div>
</template>

<script>
import moment from "moment";
import option from "./chart.js";
export default {
  name: "chart",
  props: ["chartData", "noDataData"],
  components: {},
  data() {
    return {
      xAxisData: [],
      seriesData: [
        {
          name: "湿度",
          data: [],
          type: "line",
          lineStyle: {
            width: 1,
          },
          // symbolSize: 10,
          smooth: true,
          areaStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: "rgba(69,246,255,0.3)", // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "rgba(69,246,255,0)", // 100% 处的颜色
                },
              ],
              globalCoord: false, // 缺省为 false
            },
          },
        },
        {
          name: "温度",
          data: [],
          type: "line",
          smooth: true,
          lineStyle: {
            width: 1,
          },
          // symbolSize: 10,
          yAxisIndex: 1,
          areaStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: "rgba(49,88,255,0.3)", // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "rgba(49,88,255,0)", // 100% 处的颜色
                },
              ],
              globalCoord: false, // 缺省为 false
            },
          },
        },
      ],
    };
  },
  watch: {
    chartData: function (newVal, oldVal) {
      this.initChartData();
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.initChartData();
    });
  },
  methods: {
    initChartData() {
      let data = this.chartData;
      // 如果没有检测数据，则取第一个有数据的数据
      if (!data || data.humidity.length <= 0) {
        data = this.noDataData;
      }
      let xData = [];
      let humiditySerData = [];
      let temperatureSerData = [];
      for (let item of data.humidity) {
        xData.push(moment(item.createTime).format("HH:mm"));
        humiditySerData.push(item.quotaValue);
      }
      for (let item of data.temperature) {
        temperatureSerData.push(item.quotaValue);
      }

      this.xAxisData = xData;
      this.seriesData[0].data = humiditySerData;
      this.seriesData[1].data = temperatureSerData;

      this.drawLine();
    },
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(this.$refs["itemElevenChart"], "dark");
      let opts = Object.assign({}, option);
      opts.xAxis.data = this.xAxisData;
      opts.series = this.seriesData;
      // 绘制图表
      myChart.setOption(opts);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>

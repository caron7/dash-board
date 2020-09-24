<template>
  <div ref="itemSixChart" class="itemSixChart"></div>
</template>

<script>
import moment from "moment";
import option from "./chart.js";
export default {
  name: "itemSixChart",

  data() {
    return {
      xAxisData: [
        "08/01",
        "08/02",
        "08/03",
        "08/04",
        "08/05",
        "08/06",
        "08/07",
        "08/08",
        "08/09",
        "08/10"
      ],
      seriesData: [
        {
          name: "告警数量",
          data: [10, 20, 15, 8, 7, 11, 20, 15, 8, 5],
          type: "line",
          barWidth: 15,
          smooth: true,
          lineStyle: {
            width: 1
          },
          symbol: "circle", //取消折点圆圈
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
                  color: "#e5901d" // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "rgba(5,26,58,0.5)" // 100% 处的颜色
                }
              ],
              globalCoord: false // 缺省为 false
            }
          }
        }
      ]
    };
  },
  watch: {
    "$store.state.app.websocketData": function(newVal, oldVal) {
      let val = newVal;
      if (val.alarmCount) {
        this.initChartData(val.alarmCount.sort(this.sortDownDate));
      }
    }
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    sortDownDate(a, b) {
      return Date.parse(a.DAYS) - Date.parse(b.DAYS);
    },
    initChartData(newVal) {
      // this.xAxisData = [];
      // this.seriesData[0].data = [];
      // for (let item of newVal) {
      //   this.xAxisData.push(moment(item.DAYS).format("MM/DD"));
      //   this.seriesData[0].data.push(item.COUNT);
      // }
      // this.drawLine();
    },
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(this.$refs["itemSixChart"], "dark");
      let opts = Object.assign({}, option);
      opts.xAxis.data = this.xAxisData;
      opts.series = this.seriesData;
      // 绘制图表
      myChart.setOption(opts);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>

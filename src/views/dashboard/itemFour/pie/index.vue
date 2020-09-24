<template>
  <div class="pie">
    <img class="piebg" :src="piebg" />
    <div class="chart">
      <div ref="picChart" class="picChart"></div>
    </div>
  </div>
</template>

<script>
import piebg from "@/assets/images/piebg.png";
import option from "./chart.js";
export default {
  name: "pie",
  props: ["resData"],
  data() {
    return {
      piebg,
      seriesData: [
        {
          value: 27,
          name: "占用车位"
        },
        {
          value: 0,
          name: "空闲车位"
        }
      ]
    };
  },
  watch: {
    // resData: function(newVal, oldVal) {
    //   this.initChartData();
    // }
  },
  mounted() {
    // if (!this.resData) {
    //   return;
    // }
    // this.initChartData();

    this.drawPie();
  },
  methods: {
    initChartData() {
      let data = this.resData;
      this.seriesData[0].value = data.occupyNum;
      this.seriesData[1].value = data.freeNum;
      this.drawPie();
    },
    formatterSum() {
      let sum = 0;
      for (let item of this.seriesData) {
        sum += item.value;
      }
      return sum;
    },
    drawPie() {
      let _t = this;
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(this.$refs["picChart"], "dark");
      let opts = Object.assign({}, option);
      opts.legend.formatter = function(params) {
        for (let a = 0; a < _t.seriesData.length; a++) {
          if (_t.seriesData[a].name == params) {
            return params + "   " + _t.seriesData[a].value + "个";
          }
        }
      };
      opts.series[0].data = _t.seriesData;
      opts.series[0].label = {
        show: true,
        position: "center",
        formatter: function() {
          return _t.formatterSum();
        },
        textStyle: {
          fontSize: "200%",
          color: "#8f95a8"
        }
      };
      // 绘制图表
      myChart.setOption(opts);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>

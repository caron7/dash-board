<template>
  <div class="electric">
    <info :data="electricData"></info>
    <div class="chart">
      <div ref="electricChart" class="electricChart"></div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import info from "../info";
import option from "./chart.js";
import { getObjectKeys, getObjectValues } from "@/utils/arrayParams.js";
export default {
  name: "electric",
  props: ["resData"],
  components: { info },
  data() {
    return {
      electricData: {
        // icon: "yongdianzonglan",
        // title: "今日用电",
        // size: "236KW.h",
        // type: "down",
        // percentageName: "环比减少",
        // percentageNum: "11%",
      },
      xAxisData: [],
      seriesData: [
        {
          data: [],
          type: "bar",
          barWidth: 10,
        },
      ],
    };
  },
  watch: {
    resData: function (newVal, oldVal) {
      this.initWaterData();
      this.initChartData();
    },
  },
  mounted() {
    if (!this.resData) {
      return;
    }
    this.initWaterData();
    this.initChartData();
  },
  methods: {
    initWaterData() {
      let data = this.resData;
      this.electricData = {
        icon: "yongdianzonglan",
        title: "今日用电",
        size: data.todayPower + "KW.h",
        type: data.powerRise ? "up" : "down",
        percentageName: data.powerRise ? "环比增长" : "环比减少",
        percentageNum: data.powerRate.toFixed(2) + "%",
      };
    },
    initChartData() {
      let data = this.resData;
      let xAxisKeys = getObjectKeys(data.lastFiveDaysPower);
      let xData = [];
      for (let item of xAxisKeys) {
        xData.push(moment(item).format("YYYY/M"));
      }
      this.xAxisData = xData;
      this.seriesData[0].data = getObjectValues(data.lastFiveDaysWater);

      this.drawLine();
    },
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(this.$refs["electricChart"], "dark");
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

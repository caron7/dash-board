<template>
  <div class="water">
    <info :data="waterData"></info>
    <div class="chart">
      <div ref="waterChart" class="waterChart"></div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import info from "../info";
import option from "./chart.js";
import { getObjectKeys, getObjectValues } from "@/utils/arrayParams.js";
export default {
  name: "water",
  props: ["resData"],
  components: { info },
  data() {
    return {
      waterData: {
        // icon: "yongshui",
        // title: "今日用水",
        // size: "156m²",
        // type: "up",
        // percentageName: "环比增长",
        // percentageNum: "23%",
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
      this.waterData = {
        icon: "yongshui",
        title: "今日用水",
        size: data.todayWater + "m³",
        type: data.waterRise ? "up" : "down",
        percentageName: data.waterRise ? "环比增长" : "环比减少",
        percentageNum: data.waterRate.toFixed(0) + "%",
      };
    },
    initChartData() {
      let data = this.resData;
      let xAxisKeys = getObjectKeys(data.lastFiveDaysWater);
      let xData = [];
      for (let item of xAxisKeys) {
        xData.push(moment(item).format("MM/DD"));
      }
      this.xAxisData = xData;
      this.seriesData[0].data = getObjectValues(data.lastFiveDaysWater);

      this.drawLine();
    },
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(this.$refs["waterChart"], "dark");
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

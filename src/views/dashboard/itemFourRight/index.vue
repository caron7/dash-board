<template>
  <div class="commonItem itemThree">
    <div class="itemHeader">
      访客统计
      <div class="text">
        <el-select
          @change="changeType"
          class="selectType"
          :size="'mini'"
          v-model="selectType"
          placeholder="请选择"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
    </div>
    <div class="itemContent">
      <div ref="itemThreeChart" class="itemThreeChart"></div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import { getCountByMonth, getCountByYear } from "@/api/index.js";
import option from "./chart.js";
import { mockDataMonth, mockDataYear } from "./mock.js";
export default {
  name: "itemFourRight",
  data() {
    return {
      chartData: null,
      interval: null,
      selectType: "最近一月",
      options: [
        {
          value: "最近一月",
          label: "最近一月"
        },
        {
          value: "最近一年",
          label: "最近一年"
        }
      ],
      xAxisData: [],
      seriesData: [
        {
          data: [],
          type: "bar",
          barWidth: 5
        }
        // {
        //   data: [],
        //   type: "line",
        //   barWidth: 15,
        //   symbol: "none", //取消折点圆圈
        // },
      ]
    };
  },
  mounted() {
    this.getDataFunc();
    // this.interval = setInterval(() => {
    //   this.getDataFunc();
    // }, 1000 * 60 * 30);
  },
  destroyed() {
    clearInterval(this.interval);
  },
  methods: {
    changeType() {
      this.getDataFunc();
    },
    getDataFunc() {
      if (this.selectType == "最近一月") {
        this.getCountByMonthFunc();
      } else if (this.selectType == "最近一年") {
        this.getCountByYearFunc();
      }
    },
    async getCountByMonthFunc() {
      // const res = await getCountByMonth();
      // if (res.status === 200) {
      //   this.chartData = res.data;
      //   this.initChartData("month");
      // }

      this.chartData = mockDataMonth;
      this.initChartData("month");
    },
    async getCountByYearFunc() {
      // const res = await getCountByYear();
      // if (res.status === 200) {
      //   this.chartData = res.data;
      //   this.initChartData("year");
      // }

      this.chartData = mockDataYear;
      this.initChartData("year");
    },
    initChartData(type) {
      let data = this.chartData;
      let xData = [];
      let serData = [];
      for (let item of data.xAxis) {
        // xData.push(moment(item).format(type == "year" ? "YYYY-MM" : "MM/DD"));
        xData.push(moment(item).format(type == "year" ? "M月" : "MM/DD"));
      }

      this.xAxisData = xData;
      this.seriesData[0].data = data.series[0].data;
      // this.seriesData[1].data = data.series[0].data;

      this.drawLine();
    },
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(this.$refs["itemThreeChart"], "dark");
      let opts = Object.assign({}, option);

      opts.xAxis.axisLabel = {
        fontSize: "70%",
        interval: this.selectType == "最近一年" ? 0 : 4
      };

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

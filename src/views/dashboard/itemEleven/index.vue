<template>
  <div class="commonItem itemEleven">
    <div class="itemHeader">
      温湿度检测
      <div v-if="resData" class="text">{{ resData[index].address }}</div>
    </div>
    <div class="itemContent">
      <template v-if="resData">
        <el-carousel
          @change="handleChange"
          :height="'calc(100% - 18px)'"
          indicator-position="outside"
          :interval="5000"
        >
          <el-carousel-item v-for="(item, index) in resData" :key="index">
            <chart :chartData="item" :noDataData="noDataData"></chart>
          </el-carousel-item>
        </el-carousel>
      </template>
    </div>
  </div>
</template>

<script>
import { getTempHumidity } from "@/api/index.js";
import chart from "./chart";
import { mockData } from "./mock.js";

export default {
  name: "itemEleven",
  components: { chart },
  data() {
    return {
      noDataData: null,
      resData: mockData,
      interval: null,
      index: 0
    };
  },
  mounted() {
    // this.getTempHumidityFunc();
    // this.interval = setInterval(() => {
    //   this.getTempHumidityFunc();
    // }, 1000 * 60 * 30);

    let hasData = this.resData.filter(d => d.humidity.length > 0);
    this.noDataData = hasData[0];
  },
  destroyed() {
    // clearInterval(this.interval);
  },
  methods: {
    handleChange(index) {
      this.index = index;
    },
    async getTempHumidityFunc() {
      const res = await getTempHumidity();
      if (res.status === 200) {
        this.resData = res.data;
        let hasData = this.resData.filter(d => d.humidity.length > 0);
        this.noDataData = hasData[0];
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>

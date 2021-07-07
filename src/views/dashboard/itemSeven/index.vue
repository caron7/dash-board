<template>
  <div class="commonItem itemSeven">
    <div class="itemHeader">能耗概览</div>
    <div class="itemContent">
      <div class="itemSevenContent">
        <div class="left">
          <water :resData="resData"></water>
        </div>
        <div class="right">
          <electric :resData="resData"></electric>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getWaterPower } from "@/api/index.js";
import water from "./water";
import electric from "./electric";
export default {
  name: "itemSeven",
  components: { water, electric },
  data() {
    return {
      resData: {
        todayWater: "30.1",
        powerRise: true,
        lastFiveDaysWater: {
          "2021-01": "27.8",
          "2020-09-18": "28.1",
          "2020-09-19": "27.1",
          "2020-09-21": "30.1",
          "2020-09-20": "32.1"
        },
        powerRate: 0.0946841606925506,
        waterRise: false,
        lastFiveDaysPower: {
          "2021-01": "209066.7",
          "2021-02": "62973",
          "2021-03": "163802",
          "2021-04": "127872",
          "2021-05": "109280",
          "2021-06": "155791"

        },
        waterRate: 6.230529595015576,
        todayPower: "222"
      },
      interval: null
    };
  },
  mounted() {
    // this.getWaterPowerFunc();
    // this.interval = setInterval(() => {
    //   this.getWaterPowerFunc();
    // }, 1000 * 60 * 30);
  },
  destroyed() {
    // clearInterval(this.interval);
  },
  methods: {
    async getWaterPowerFunc() {
      const res = await getWaterPower();
      if (res.status === 200) {
        this.resData = res.data;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>

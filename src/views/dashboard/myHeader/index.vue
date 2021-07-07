<template>
  <div class="myHeader">
    <div class="left">
      <div class="weather">
        <div class="weatherIcon">
          <!-- <span v-if="weatherType.indexOf('雾') != -1" class="iconfont icon-youwu"></span>
          <span v-else-if="weatherType.indexOf('晴转多云') != -1" class="iconfont icon-qingzhuanduoyun"></span> -->
          <span  class="iconfont icon-qingtian"></span>
          <!-- <span v-else-if="weatherType.indexOf('雨') != -1" class="iconfont icon-baoyu"></span>
          <span v-else-if="weatherType.indexOf('冰') != -1" class="iconfont icon-bingbao"></span>
          <span v-else-if="weatherType.indexOf('雪') != -1" class="iconfont icon-baoxue"></span> -->
          <!-- <span v-else class="iconfont icon-yintian"></span> -->
        </div>
        <div class="weatherDetail">
          <div>31 ℃</div>
          <div>桐乡市 晴</div>
        </div>
      </div>
    </div>
    <div class="title">
      时尚创新园智慧大屏
    </div>
    <div class="right">
      <div class="setting">{{ date }} {{ time }}</div>
      <!-- <span class="iconfont icon-shezhi"></span> -->
    </div>
  </div>
</template>

<script>
import { getWeather } from "@/api/index.js";
import moment from "moment";
import logo from "@/assets/images/logo.png";
export default {
  name: "myHeader",
  data() {
    return {
      logo,
      date: "",
      time: "",
      myTimeDisplay: null,
      wendu: "",
      weatherType: "",
    };
  },
  mounted() {
    // this.getWeatherFunc();
    this.getCurrentTime();
    clearInterval(this.myTimeDisplay);
    this.myTimeDisplay = setInterval(() => {
      this.getCurrentTime(); //每秒更新一次时间
    }, 1000);
  },
  methods: {
    async getWeatherFunc() {
      const res = await getWeather();
      console.info(res);
      if (res.status == 1000) {
        this.weatherType = res.data.forecast[0].type;
        this.wendu = res.data.wendu;
      }
    },
    getCurrentTime() {
      //获取当前时间
      var now = new Date();
      var date = moment(now).format("YYYY年MM月DD日");
      var time = moment(now).format("HH:mm:ss");
      this.time = time;
      this.date = date;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>

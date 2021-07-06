<template>
  <div class="commonItem itemFour">
    <div class="itemHeader">
      实时车位
      <div class="fullscreen">
        <span class="iconfont icon-quanping"></span>
      </div>
    </div>
    <div class="itemContent">
      <div class="parking">
        <div class="left">
          <pie :resData="resData"></pie>
        </div>
        <!-- <div class="right">
          <floor :resData="resData"></floor>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import {getParkData} from "@/api/index.js";
import pie from "./pie";
import floor from "./floor";

export default {
  name: "itemFour",
  components: {pie, floor},
  data() {
    return {resData: {value: 11, name: 111}, interval: null};
  },
  mounted() {
    // this.getParkDataFunc();
    // this.interval = setInterval(() => {
    //   this.getParkDataFunc();
    // }, 1000 * 60 * 30);
  },
  destroyed() {
    // clearInterval(this.interval);
  },
  methods: {
    // async getParkDataFunc() {
    //   const res = await getParkData();
    //   if (res.status === 200) {
    //     // this.resData = res.data;
    //     console.log(this.resData, 1111111111)
    //   }
    // }
  }
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>

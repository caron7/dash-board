<template>
  <div class="rader_container">
    <div class="rader_left">
      <div class="radar"></div>
    </div>

    <div class="rader_right">
      <div class="borderBottom">
        <div class="bigTitle">实时告警</div>
        <div class="num">{{ ssgj }}</div>
      </div>
      <div class="rader_detail">
        <div>
          <div class="title">严重</div>
          <div class="num noBorder yz">{{ yz }}</div>
        </div>
        <div>
          <div class="title">重要</div>
          <div class="num noBorder zy">{{ zy }}</div>
        </div>
        <div>
          <div class="title">警告</div>
          <div class="num noBorder jg">{{ jg }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { queryRecentThermal } from "@/api/index.js";
export default {
  name: "radar",
  data() {
    return {
      ssgj: 5,
      yz: 4,
      zy: 1,
      jg: 0
    };
  },
  watch: {
    "$store.state.app.websocketData": function(newVal, oldVal) {
      let val = newVal;
      if (newVal.thermal) {
        // 严重
        if (newVal.thermal.alarmLever == 1) {
          this.yz++;
          this.ssgj++;
        }
        // 重要
        else if (newVal.thermal.alarmLever == 2) {
          this.zy++;
          this.ssgj++;
        }
        // 警告
        else if (newVal.thermal.alarmLever == 3) {
          this.jg++;
          this.ssgj++;
        }
      }
    }
  },
  mounted() {
    // this.queryRecentThermalFunc();
  },
  methods: {
    async queryRecentThermalFunc() {
      const res = await queryRecentThermal();
      if (res.status === 200) {
        let list = res.data;
        for (let item of list) {
          // 严重
          if (item.alarmLever == 1) {
            this.yz++;
            this.ssgj++;
          }
          // 重要
          else if (item.alarmLever == 2) {
            this.zy++;
            this.ssgj++;
          }
          // 警告
          else if (item.alarmLever == 3) {
            this.jg++;
            this.ssgj++;
          }
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>

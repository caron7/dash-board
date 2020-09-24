<template>
  <div class="commonItem itemEight">
    <div class="itemHeader">
      空气检测
      <div class="fullscreen">
        <span class="iconfont icon-quanping"></span>
      </div>
    </div>
    <div class="itemContent">
      <div class="testing">
        <div class="testingContent">
          <div class="fengsu">
            <img class="rotate360Ani" :src="fengsu" />
          </div>
          <div class="testRow">
            <div v-for="item of rowOne" :key="item.name" class="testCol">
              <div class="type">
                <div :class="`${formatTypeClass(item.type)}`">{{ item.type }}</div>
              </div>
              <div class="icon">
                <span :class="`icon-${item.icon}`" class="iconfont"></span>
              </div>
              <div class="data">
                <div>{{ item.name }}</div>
                <div>
                  <countTo
                    :decimals="formartDecimals(item.value)"
                    :startVal="0"
                    :endVal="formatNumber(item.value)"
                    :suffix="item.company"
                  ></countTo>
                </div>
              </div>
            </div>
          </div>
          <div class="testRow">
            <div v-for="item of rowTwo" :key="item.name" class="testCol">
              <div class="type">
                <div :class="`${formatTypeClass(item.type)}`">{{ item.type }}</div>
              </div>
              <div class="icon">
                <span :class="`icon-${item.icon}`" class="iconfont"></span>
              </div>
              <div class="data">
                <div>{{ item.name }}</div>
                <div>
                  <countTo
                    :decimals="formartDecimals(item.value)"
                    :startVal="0"
                    :endVal="formatNumber(item.value)"
                    :suffix="item.company"
                  ></countTo>
                </div>
              </div>
            </div>
          </div>
          <div class="testRow">
            <div v-for="item of rowThree" :key="item.name" class="testCol">
              <div class="type">
                <div :class="`${formatTypeClass(item.type)}`">{{ item.type }}</div>
              </div>
              <div class="icon">
                <span :class="`icon-${item.icon}`" class="iconfont"></span>
              </div>
              <div class="data">
                <div>{{ item.name }}</div>
                <div>
                  <countTo
                    :decimals="formartDecimals(item.value)"
                    :startVal="0"
                    :endVal="formatNumber(item.value)"
                    :suffix="item.company"
                  ></countTo>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import countTo from "vue-count-to";
import fengsu from "@/assets/images/fengsu.png";
export default {
  name: "itemEight",
  components: { countTo },
  data() {
    return {
      fengsu,
      rowOne: [
        {
          name: "风速",
          icon: "fengsu",
          value: 0,
          type: "",
          company: "m/s",
        },
        {
          name: "风向",
          icon: "fengxiang",
          value: 0,
          type: "",
          company: "°",
        },
      ],
      rowTwo: [
        {
          name: "PM10",
          icon: "pm10",
          value: 0,
          type: "优",
          company: "ug/m³",
        },
        {
          name: "PM2.5",
          icon: "pm25",
          value: 0,
          type: "良",
          company: "ug/m³",
        },
      ],
      rowThree: [
        {
          name: "SO2",
          icon: "co2",
          value: 0,
          type: "轻度",
          company: "ppm",
        },
        {
          name: "NO2",
          icon: "co2",
          value: 0,
          type: "中度",
          company: "ppm",
        },
        {
          name: "CO",
          icon: "wenduji",
          value: 0,
          type: "重度",
          company: "ppm",
        },
      ],
    };
  },
  mounted() {},
  watch: {
    "$store.state.app.websocketData": function (newVal, oldVal) {
      let val = newVal;
      // 初始化数据
      if (val.co) {
        this.rowThree[2].value = val.co;
        this.rowThree[2].type = this.formatRowThreeType(val.co);
      }
      if (val.no2) {
        this.rowThree[1].value = val.no2;
        this.rowThree[1].type = this.formatRowThreeType(val.no2);
      }
      if (val.so2) {
        this.rowThree[0].value = val.so2;
        this.rowThree[0].type = this.formatRowThreeType(val.so2);
      }
      if (val.pm25) {
        this.rowTwo[1].value = val.pm25;
        this.rowTwo[1].type = this.formatRowTwoType(val.pm25);
      }
      if (val.pm10) {
        this.rowTwo[0].value = val.pm10;
        this.rowTwo[0].type = this.formatRowTwoType(val.pm10);
      }
      if (val.wind_direction) {
        this.rowOne[1].value = val.wind_direction;
      }
      if (val.wind_speed) {
        this.rowOne[0].value = val.wind_speed;
      }
      // 实时数据
      if (val.equipData) {
        if (val.equipData.quotaCode == "co") {
          this.rowThree[2].value = val.equipData.quotaValue;
          this.rowThree[2].type = this.formatRowThreeType(
            val.equipData.quotaValue
          );
        }
        if (val.equipData.quotaCode == "no2") {
          this.rowThree[1].value = val.equipData.quotaValue;
          this.rowThree[1].type = this.formatRowThreeType(
            val.equipData.quotaValue
          );
        }
        if (val.equipData.quotaCode == "so2") {
          this.rowThree[0].value = val.equipData.quotaValue;
          this.rowThree[0].type = this.formatRowThreeType(
            val.equipData.quotaValue
          );
        }
        if (val.equipData.quotaCode == "pm25") {
          this.rowTwo[1].value = val.equipData.quotaValue;
          this.rowTwo[1].type = this.formatRowTwoType(val.equipData.quotaValue);
        }
        if (val.equipData.quotaCode == "pm10") {
          this.rowTwo[0].value = val.equipData.quotaValue;
          this.rowTwo[0].type = this.formatRowTwoType(val.equipData.quotaValue);
        }
        if (val.equipData.quotaCode == "wind_direction") {
          this.rowOne[1].value = val.equipData.quotaValue;
        }
        if (val.equipData.quotaCode == "wind_speed") {
          this.rowOne[0].value = val.equipData.quotaValue;
        }
      }
    },
  },
  methods: {
    formartDecimals(val) {
      let num = val + "";
      let arr = num.split(".");
      if (arr.length <= 1) {
        return 0;
      } else {
        return arr[1].length;
      }
    },
    formatNumber(val) {
      // console.info(val);
      if (typeof val == "string") {
        return Number(val);
      }
      return val;
    },
    formatRowTwoType(val) {
      if (val >= 0 && val < 35) {
        return "优";
      } else if (val >= 35 && val < 75) {
        return "良";
      } else if (val >= 75 && val < 115) {
        return "轻度";
      } else if (val >= 115 && val < 150) {
        return "中度";
      } else if (val >= 150) {
        return "重度";
      }
    },
    formatRowThreeType(val) {
      if (val <= 50) {
        return "优";
      } else if (val <= 100) {
        return "良";
      } else if (val <= 200) {
        return "轻度";
      } else if (val <= 300) {
        return "中度";
      } else if (val > 300) {
        return "重度";
      }
    },
    formatTypeClass(val) {
      if (val == "优") {
        return "excellent";
      } else if (val == "良") {
        return "good";
      } else if (val == "轻度") {
        return "light";
      } else if (val == "中度") {
        return "moderate";
      } else if (val == "重度") {
        return "severe";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>

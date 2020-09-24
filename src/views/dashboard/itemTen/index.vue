<template>
  <div class="commonItem itemTen">
    <div class="itemHeader">土壤检测</div>
    <div class="itemContent">
      <div class="testing">
        <div class="testingContent">
          <div class="testRow">
            <div v-for="item of rowOne" :key="item.name" class="testCol">
              <div class="icon">
                <span :class="`icon-turangshidu`" class="iconfont"></span>
              </div>
              <div class="data">
                <div>{{item.name}}</div>
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
export default {
  name: "itemTen",
  components: { countTo },
  data() {
    return {
      rowOne: [
        {
          name: "温度",
          value: 0,
          company: "℃",
        },
        {
          name: "水分",
          value: 0,
          company: "%",
        },
        {
          name: "导电率",
          value: 0,
          company: "uS/cm",
        },
        {
          name: "PH值",
          value: 0,
          company: "ph",
        },
      ],
    };
  },
  watch: {
    "$store.state.app.websocketData": function (newVal, oldVal) {
      let val = newVal;
      if (val.earth_temperature) {
        this.rowOne[0].value = val.earth_temperature;
      }
      if (val.earth_humidity) {
        this.rowOne[1].value = val.earth_humidity;
      }
      if (val.earth_conductivity) {
        this.rowOne[2].value = val.earth_conductivity;
      }
      if (val.earth_ph) {
        this.rowOne[3].value = val.earth_ph;
      }
      // 实时数据
      if (val.equipData) {
        if (val.equipData.quotaCode == "earth_temperature") {
          this.rowOne[0].value = val.equipData.quotaValue;
        }
        if (val.equipData.quotaCode == "earth_humidity") {
          this.rowOne[1].value = val.equipData.quotaValue;
        }
        if (val.equipData.quotaCode == "earth_conductivity") {
          this.rowOne[2].value = val.equipData.quotaValue;
        }
        if (val.equipData.quotaCode == "earth_ph") {
          this.rowOne[3].value = val.equipData.quotaValue;
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
      if (typeof val == "string") {
        return Number(val);
      }
      return val;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>

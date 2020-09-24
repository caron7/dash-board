<template>
  <div class="floor">
    <img class="west" :src="west" />
    <img class="south" :src="south" />
    <img class="building" :src="building" />

    <template v-for="(item,index) of data">
      <div
        v-if="item"
        :key="item.id"
        class="parkingLot"
        :class="[`park${index+1}`,index+1<4||index+1>8?'horizontal':'']"
      >
        <div v-show="item.quotaValue==1||item.quotaValue==null" class="car"></div>
      </div>
    </template>

    <!-- <div class="parkingLot park27 horizontal">
      <div class="car"></div>
    </div>-->
  </div>
</template>

<script>
import west from "@/assets/images/west.png";
import south from "@/assets/images/south.png";
import building from "@/assets/images/building.png";
export default {
  name: "floor",
  props: ["resData"],
  data() {
    return {
      west,
      south,
      building,
      data: [],
    };
  },
  watch: {
    resData: function (newVal, oldVal) {
      this.initParkData();
    },
    "$store.state.app.websocketData": function (newVal, oldVal) {
      let val = newVal;
      // 实时数据
      if (val.equipData) {
        if (val.equipData.quotaCode == "state") {
          let arrData = this.data.filter(
            (d) => d.equipId == val.equipData.equipId
          );
          arrData = val.equipData;
        }
      }
    },
  },
  mounted() {
    if (!this.resData) {
      return;
    }
    this.initParkData();
  },
  methods: {
    initParkData() {
      let data = this.resData;
      this.data = data.parkData.sort(this.sortDownDate);
    },
    sortDownDate(a, b) {
      return a.id.split("-")[2] - b.id.split("-")[2];
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>

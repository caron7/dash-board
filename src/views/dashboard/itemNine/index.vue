<template>
  <div class="commonItem itemNine">
    <div class="itemHeader">灯光控制</div>
    <div class="itemContent">
      <div class="itemSlider">
        <div>
          <el-slider @change="handleChange" v-model="value" :step="1" :max="5" show-stops></el-slider>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { saveLight } from "@/api/index.js";
export default {
  name: "itemNine",
  data() {
    return {
      value: 1,
    };
  },
  mounted() {},
  methods: {
    handleChange(val) {
      saveLight({
        percent: val * 20,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>

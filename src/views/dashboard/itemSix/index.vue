<template>
  <div class="commonItem itemSix">
    <div class="itemHeader">
      告警雷达
      <div class="fullscreen">
        <span class="iconfont icon-quanping"></span>
      </div>
    </div>
    <div class="itemContent">
      <div class="itemSixContent">
        <div class="left">
          <radar></radar>
        </div>
        <div class="right">
          <chart></chart>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import radar from "./radar";
import chart from "./chart";
export default {
  name: "itemSix",
  components: { radar, chart },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>

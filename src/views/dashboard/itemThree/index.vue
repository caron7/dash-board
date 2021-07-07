<template>
  <div class="commonItem itemThree">
    <div class="itemHeader">
      人员统计
    </div>
    <div class="itemContent">
      <div class="school">
        <div class="head">
          <div class="headImg">
            <img :src="schoolPng" />
          </div>
          <div>数字经济小镇</div>
        </div>
        <div class="cont">
          <div>办公人数 3500人</div>
          <div>企业办公人数 3200人</div>
          <div>20年新增人数 500人</div>
          <div>21年新增人数 300个</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import schoolPng from "@/assets/images/company.png";
import moment from "moment";
export default {
  name: "itemThree",
  data() {
    return { schoolPng };
  },
  mounted() {},
  destroyed() {},
  methods: {}
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>

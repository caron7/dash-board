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
          <div>北师大长沙附属学校</div>
        </div>
        <div class="cont">
          <div>老师 1232人</div>
          <div>部门 103个</div>
          <div>学生 3418人</div>
          <div>班级 174个</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import schoolPng from "@/assets/images/school.png";
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

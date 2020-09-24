<template>
  <div class="myContent">
    <div class="left">
      <div class="one">
        <itemOne></itemOne>
      </div>
      <div class="two">
        <itemTwo></itemTwo>
      </div>
      <div class="three">
        <itemThree></itemThree>
      </div>
      <div class="three-right">
        <itemThreeRight></itemThreeRight>
      </div>
      <div class="four">
        <itemFour></itemFour>
      </div>
      <div class="four-right">
        <itemFourRight></itemFourRight>
      </div>
    </div>
    <div class="center">
      <div class="five">
        <!-- <img class="bimPng" :src="bim" /> -->
        <itemFive></itemFive>
      </div>
      <div class="six">
        <itemSix></itemSix>
      </div>
    </div>
    <div class="right">
      <div class="seven">
        <itemSeven></itemSeven>
      </div>
      <div class="eight">
        <itemEight></itemEight>
      </div>
      <!-- <div class="nine">
        <itemNine></itemNine>
      </div> -->
      <div class="ten">
        <itemTen></itemTen>
      </div>
      <div class="eleven">
        <itemEleven></itemEleven>
      </div>
    </div>
  </div>
</template>

<script>
import bim from "@/assets/images/bim.jpg";
import itemOne from "@/views/dashboard/itemOne";
import itemTwo from "@/views/dashboard/itemTwo";
import itemThree from "@/views/dashboard/itemThree";
import itemThreeRight from "@/views/dashboard/itemThreeRight";
import itemFour from "@/views/dashboard/itemFour";
import itemFourRight from "@/views/dashboard/itemFourRight";
import itemFive from "@/views/dashboard/itemFive";
import itemSix from "@/views/dashboard/itemSix";
import itemSeven from "@/views/dashboard/itemSeven";
import itemEight from "@/views/dashboard/itemEight";
// import itemNine from "@/views/dashboard/itemNine";
import itemTen from "@/views/dashboard/itemTen";
import itemEleven from "@/views/dashboard/itemEleven";
export default {
  name: "myContent",
  components: {
    itemOne,
    itemTwo,
    itemThree,
    itemThreeRight,
    itemFour,
    itemFourRight,
    itemFive,
    itemSix,
    itemSeven,
    itemEight,
    // itemNine,
    itemTen,
    itemEleven
  },
  data() {
    return {
      bim
    };
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>

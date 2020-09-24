<template>
  <div class="commonItem itemOne">
    <div class="itemHeader">
      车辆识别
      <div class="fullscreen">
        <span class="iconfont icon-quanping"></span>
      </div>
    </div>
    <div class="itemContent">
      <div class="contentList">
        <div
          class="listItem animate__animated"
          :class="{'animate__backInDown':index == 0,'animate__slideInDown':index != 0}"
          v-for="(item, index) of list"
          :key="index"
        >
          <div class="headImg">
            <img :src="item.img" />
          </div>
          <div class="line"></div>
          <div class="conts">
            <div class="date">{{ item.name }}</div>
            <div class="name">
              <div>{{ item.men }}</div>
              <div>{{ item.date }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import enter from "@/assets/images/enter.png";
import exit from "@/assets/images/exit.png";
export default {
  name: "itemOne",
  data() {
    return {
      count: 0,
      list: [
        {
          img: exit,
          name: "苏A.37554",
          men: "南门",
          date: "08:05:12",
        },
        {
          img: enter,
          name: "苏A.W30U4",
          men: "南门",
          date: "08:02:12",
        },
        {
          img: enter,
          name: "苏A.57551",
          men: "南门",
          date: "08:00:54",
        },
        {
          img: enter,
          name: "苏A.W4201",
          men: "西门",
          date: "07:02:12",
        },
      ],
    };
  },
  watch: {
    "$store.state.app.websocketData": function (newVal, oldVal) {
      if (newVal.carData) {
        if (newVal.carData.length > 1) {
          return;
        }
        this.handleBtnClick(newVal.carData);
      }
    },
  },
  mounted() {
    // this.list = [];
    // setInterval(() => {
    //   this.handleBtnClick([
    //     {
    //       date: "10:50:15",
    //       carNo: "苏A123450",
    //       name: "南门",
    //       type: 1,
    //     },
    //   ]);
    // }, 5000);
  },
  methods: {
    spliceArr(arr) {
      return arr.splice(0, 4);
    },
    handleBtnClick: function (newVal) {
      for (let item of newVal) {
        let listData = this.spliceArr(this.list);
        this.list = [];
        this.$nextTick(() => {
          this.list.unshift({
            img: item.type == 1 ? enter : exit,
            name: item.carNo,
            men: item.name,
            date: item.date,
          });
          this.list.push(...listData);
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
.v-enter,
.v-leave-to {
  opacity: 0;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 1s;
}
</style>

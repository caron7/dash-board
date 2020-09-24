<template>
  <div class="commonItem itemOne">
    <div class="itemHeader">
      体温监测
      <div class="fullscreen">
        <span class="iconfont icon-quanping"></span>
      </div>
    </div>
    <div class="itemContent">
      <div class="contentList">
        <div
          class="listItem animate__animated"
          :class="{
            animate__backInDown: index == 0,
            animate__slideInDown: index != 0
          }"
          v-for="(item, index) of list"
          :key="index"
        >
          <div class="headImg">
            <img :src="item.img" />
          </div>
          <div class="line"></div>
          <div class="conts">
            <div class="name">
              <div>{{ item.name }}</div>
              <div
                class="wd"
                :class="{
                  error: item.type == 'error',
                  success: item.type == 'success'
                }"
              >
                {{ item.temperature }}℃
              </div>
            </div>
            <div class="date">{{ item.date }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { saveRecentThermal, queryRecentThermal } from "@/api/index.js";
import girl from "@/assets/images/girl.jpg";
export default {
  name: "itemOne",
  data() {
    return {
      count: 0,
      list: [
        {
          img: girl,
          name: "陌生人",
          temperature: 36.5,
          date: "2020-08-01 12:02:12",
          type: "success",
          alarmLever: "0"
        },
        {
          img: girl,
          name: "陌生人",
          temperature: 36.7,
          date: "2020-08-01 12:02:12",
          type: "success",
          alarmLever: "0"
        },
        {
          img: girl,
          name: "陌生人",
          temperature: 38.2,
          date: "2020-08-01 12:02:12",
          type: "error",
          alarmLever: "2"
        },
        {
          img: girl,
          name: "陌生人",
          temperature: 36.8,
          date: "2020-08-01 12:02:12",
          type: "success",
          alarmLever: "0"
        },
        {
          img: girl,
          name: "陌生人",
          temperature: 36.6,
          date: "2020-08-01 12:02:12",
          type: "success",
          alarmLever: "0"
        }
      ]
    };
  },
  watch: {
    "$store.state.app.websocketData": function(newVal, oldVal) {
      if (newVal.thermal) {
        this.handleBtnClick(newVal.thermal);
      }
    }
  },
  mounted() {
    // this.list = [];
    // this.queryRecentThermalFunc();
    // this.handleBtnClick({
    //   thermal: 36.0,
    //   alarmLever: "2",
    //   name: "陌生人1",
    //   time: "2020-09-02 09:05:21",
    // });
    // setInterval(() => {
    //   this.handleBtnClick({
    //     thermal: 36.0,
    //     alarmLever: "2",
    //     name: "陌生人1",
    //     time: "2020-09-02 09:05:21",
    //   });
    // }, 3000);
  },
  methods: {
    async saveRecentThermalFunc(val) {
      let saveList = [];
      for (let item of val) {
        saveList.push({
          photo: item.img,
          name: item.name,
          thermal: item.temperature,
          time: item.date,
          alarmLever: item.alarmLever,
          content: item.content
        });
      }
      let params = {
        data: saveList
      };
      const res = await saveRecentThermal(params);
    },
    async queryRecentThermalFunc() {
      const res = await queryRecentThermal();
      if (res.status === 200) {
        let list = [];
        for (let newVal of res.data) {
          list.push({
            img: newVal.photo ? newVal.photo : girl,
            name: newVal.name,
            temperature: newVal.thermal,
            date: newVal.time,
            type: newVal.alarmLever == 0 ? "success" : "error",
            alarmLever: newVal.alarmLever,
            content: newVal.content || ""
          });
        }
        this.list = list;
      }
    },
    spliceArr(arr) {
      return arr.splice(0, 4);
    },
    handleBtnClick: function(newVal) {
      let listData = this.spliceArr(this.list);
      this.list = [];
      this.$nextTick(() => {
        this.list.unshift({
          img: newVal.photo ? newVal.photo : girl,
          name: newVal.name,
          temperature: newVal.thermal,
          date: newVal.time,
          type: newVal.alarmLever == 0 ? "success" : "error",
          alarmLever: newVal.alarmLever,
          content: newVal.content || ""
        });
        this.list.push(...listData);
        this.saveRecentThermalFunc(this.list);
      });
    }
  }
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

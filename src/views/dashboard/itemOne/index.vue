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
            animate__slideInDown: index != 0,
          }"
          v-for="(item, index) of list"
          :key="index"
        >
          <div class="headImg">
            <img src="../../../assets/images/girl.jpg" />
          </div>
          <div class="line"></div>
          <div class="conts">
            <div class="name">
              <div>{{ item.name }}</div>
              <div
                class="wd"
                :class="{
                  error: item.type == 'error',
                  success: item.type == 'success',
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
import girl from "@/assets/images/girl.jpg";
export default {
  name: "itemOne",
  data() {
    return {
      count: 0,
      list: [],
    };
  },
  mounted() {
    this.getData()
  },
  methods:{
    getData(){
      this.$http.get('static/tiwen-jiance.json')
        .then(res =>{
          // this.details = res.data.data
          console.log(res)
          this.list = res.data.data
          console.log(res)
        })
        .catch(err=>console.log(err))
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

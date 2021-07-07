<template>
  <div class="commonItem itemOne">
    <div class="itemHeader">
      消防安全评级
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
          <!-- <div class="headImg">
            <img src="../../../assets/images/girl.jpg" />
          </div> -->
          <!-- <div class="line"></div> -->
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
                {{ item.temperature }}
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
export default {
  name: "itemOne-copy",
  data() {
    return {
      count: 0,
      list: [
    {
      "img": "girl",
      "name": "桐乡市新其远服饰有限公司",
      "temperature": -0,
      "date": "关门，未能检查",
      "type": "success",
      "alarmLever": "0"
    },
    {
      "img": "girl",
      "name": "桐乡市懿汀服饰有限公司",
      "temperature": -0,
      "date": "关门，未能检查",
      "type": "success",
      "alarmLever": "0"
    },
    {
      "img": "girl",
      "name": "张梁",
      "temperature": "+1",
      "date": "解决电瓶车违停问题",
      "type": "success",
      "alarmLever": "0"
    },
    {
      "img": "girl",
      "name": "桐乡伊瑞品服饰有限公司",
      "temperature": "+2",
      "date": "解决三合一问题",
      "type": "success",
      "alarmLever": "0"
    },
    {
      "img": "girl",
      "name": "桐乡市择衣服饰有限公司",
      "temperature": -10,
      "date": "存在地面脏乱等不清洁现象",
      "type": "error",
      "alarmLever": "0"
    }
  ],
    };
  },
  mounted() {
    // this.getData()
  },
  methods:{
    getData(){
      this.$http.get('static/cheliang-shibie.json')
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

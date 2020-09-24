<template>
  <div v-if="data" class="title" :class="{'down':data.type=='down','up':data.type=='up'}">
    <div class="typeIcon">
      <span v-if="data.icon=='yongshui'" class="iconfont icon-yongshui"></span>
      <span v-if="data.icon=='yongdianzonglan'" class="iconfont icon-yongdianzonglan"></span>
    </div>
    <div>
      <div>{{data.title}}</div>
      <div class="size">{{data.size}}</div>
    </div>
    <div class="arrow">
      <span class="iconfont icon-jiantou"></span>
    </div>
    <div class="percentage">
      <div>{{data.percentageName}}</div>
      <div>{{data.percentageNum}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "info",
  props: ["data"],
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

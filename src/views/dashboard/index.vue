<template>
  <div class="dashboard">
    <myHeader></myHeader>

    <myContent></myContent>
  </div>
</template>

<script>
import myHeader from "./myHeader";
import myContent from "./myContent";
export default {
  name: "Dashboard",
  components: {
    myHeader,
    myContent,
  },
  data() {
    return {
      loading: false,
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.dashboard {
  color: #fff;
  width: 100vw;
  height: 100vh;
  // width: 1920px;
  // height: 1080px;
  background: url("~@/assets/images/background.jpg") no-repeat center;
  background-size: 100% 100%;
  font-size: 0.2rem;
}
</style>

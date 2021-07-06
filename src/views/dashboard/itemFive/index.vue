<template>
  <div class="commonItem itemFive">
    <iframe src="static/webgl/index.html" frameborder="0" style="width:100%;height:100%;"></iframe>
  </div>
</template>

<script>
import bimPng from "@/assets/images/bim2.jpg";
import videoPng from "@/assets/images/video1.jpg";
import cameraSelectPng from "@/assets/images/cameraSelect.png";
import cameraPng from "@/assets/images/camera.png";
export default {
  name: "itemFive",
  data() {
    return {
      bimPng,
      videoPng,
      cameraPng,
      cameraSelectPng,
      tabSelected: 0,
      tabsArr: [
        { label: "安防布控", value: 1 },
        { label: "人员统计", value: 2 },
        { label: "校园全景", value: 0 },
        { label: "能耗检测", value: 3 },
        { label: "智慧教室", value: 4 }
      ],
      oneCarmerSelected: false,
      interval: null
    };
  },
  mounted() {
    this.setIntervalFunc();
  },
  methods: {
    showThree(type) {
      // 显示整体
      this.$refs.threeDiv.classList.remove("animate__fadeOut");
      this.$refs.threeDiv.classList.add("animate__fadeIn");

      if (type == "auto") {
        setTimeout(() => {
          // 隐藏整体
          this.$refs.threeDiv.classList.add("animate__fadeOut");
          this.$refs.threeDiv.classList.remove("animate__fadeIn");
        }, 16000);
      }
    },
    showTwo(type) {
      // 显示整体
      this.$refs.twoDiv.classList.remove("animate__fadeOut");
      this.$refs.twoDiv.classList.add("animate__fadeIn");

      if (type == "auto") {
        setTimeout(() => {
          // 隐藏整体
          this.$refs.twoDiv.classList.add("animate__fadeOut");
          this.$refs.twoDiv.classList.remove("animate__fadeIn");
        }, 16000);
      }
    },
    showOne(type) {
      // 显示整体
      this.$refs.oneDiv.classList.remove("animate__fadeOut");
      this.$refs.oneDiv.classList.add("animate__fadeIn");

      if (type == "auto") {
        setTimeout(() => {
          // 隐藏整体
          this.$refs.oneDiv.classList.add("animate__fadeOut");
          this.$refs.oneDiv.classList.remove("animate__fadeIn");
        }, 16000);
      }

      // 摄像头动画
      setTimeout(() => {
        this.oneCarmerSelected = true;
        this.$refs.videoDiv.classList.remove("animate__fadeOut");
        this.$refs.videoDiv.classList.add("animate__fadeIn");
        setTimeout(() => {
          this.$refs.videoDiv.classList.remove("animate__fadeIn");
          this.$refs.videoDiv.classList.add("animate__fadeOut");
          setTimeout(() => {
            this.oneCarmerSelected = false;
          }, 1000);
        }, 10000);
      }, 4000);
    },
    setIntervalFunc() {
      this.interval = setInterval(() => {
        if (this.tabSelected >= 4) {
          this.tabSelected = 0;
        } else {
          this.tabSelected++;
        }

        // 安防布控
        if (this.tabSelected == 1) {
          this.showOne("auto");
        }
        // 人员统计
        else if (this.tabSelected == 2) {
          this.showTwo("auto");
        }
        // 能耗
        else if (this.tabSelected == 3) {
          this.showThree("auto");
        }
      }, 17000);
    },
    changeTab(val) {
      clearInterval(this.interval);
      this.tabSelected = val;
      if (val == 1) {
        this.showOne();
      } else if (val == 2) {
        this.showTwo();
      } else if (val == 3) {
        this.showThree();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>

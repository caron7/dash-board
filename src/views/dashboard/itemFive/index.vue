<template>
  <div class="commonItem itemFive">
    <!-- tab -->
    <div class="tabsContent">
      <div class="tabs">
        <div
          v-for="item of tabsArr"
          :key="item.value"
          :class="{ selected: tabSelected == item.value }"
          @click="() => changeTab(item.value)"
        >
          {{ item.label }}
        </div>
      </div>
    </div>

    <!-- 安防布控 -->
    <div ref="oneDiv" class="scene animate__animated" v-show="tabSelected == 1">
      <img
        v-show="oneCarmerSelected"
        class="cameraPng one animate__animated"
        :src="cameraSelectPng"
      />
      <img v-show="!oneCarmerSelected" class="cameraPng one" :src="cameraPng" />
      <img class="cameraPng two" :src="cameraPng" />
      <img class="cameraPng trhee" :src="cameraPng" />
      <img class="cameraPng four" :src="cameraPng" />
      <img class="cameraPng five" :src="cameraPng" />
      <img class="cameraPng six" :src="cameraPng" />
      <img class="cameraPng seven" :src="cameraPng" />
      <img class="cameraPng eight" :src="cameraPng" />
      <img class="cameraPng nine" :src="cameraPng" />
      <img class="cameraPng ten" :src="cameraPng" />
      <img class="cameraPng eleven" :src="cameraPng" />
      <div
        ref="videoDiv"
        class="videoPng one animate__animated"
        v-show="oneCarmerSelected"
      >
        <img :src="videoPng" />
        <div class="video">
          <video
            v-if="oneCarmerSelected"
            muted
            autoplay="autoplay"
            src="http://video.699pic.com/videos/29/99/22/a_jDwwUMCFf37f1592299922.mp4"
          ></video>
        </div>
      </div>
    </div>

    <!-- 人员统计 -->
    <div ref="twoDiv" class="scene animate__animated" v-show="tabSelected == 2">
      <div class="person one">125人</div>
      <div class="person two">115人</div>
      <div class="person three">0人</div>
      <div class="person four">46人</div>
      <div class="person five">231人</div>
      <div class="person six">30人</div>
      <div class="person seven">0人</div>
      <div class="person eight">1620人</div>
      <div class="person nine">377人</div>
      <div class="person ten">822人</div>
      <div class="person eleven">462人</div>
      <div class="person twelve">110人</div>
      <div class="person thirteen">43人</div>
    </div>

    <!-- 能耗 -->
    <div
      ref="threeDiv"
      class="scene animate__animated"
      v-show="tabSelected == 3"
    >
      <div class="energy one">
        <div>西区</div>
        <div>用水 3m³</div>
        <div>用电 22KW.h</div>
      </div>
      <div class="energy two">
        <div>南区</div>
        <div>用水 7m³</div>
        <div>用电 52KW.h</div>
      </div>
      <div class="energy three">
        <div>东区</div>
        <div>用水 11m³</div>
        <div>用电 62KW.h</div>
      </div>
      <div class="energy four">
        <div>北区</div>
        <div>用水 12m³</div>
        <div>用电 72KW.h</div>
      </div>
    </div>

    <!-- 3d模型图 -->
    <img class="bimPng" :src="bimPng" />
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

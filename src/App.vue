<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { createSocket } from "@/utils/websocket.js";
export default {
  name: "App",
  methods: {
    ...mapActions(["saveWebsocketData"]),
    // 接收消息
    getsocketData(e) {
      // 创建接收消息函数
      const data = e && e.detail.data;
      // console.log(data);
      if (data != 1) {
        this.saveWebsocketData(JSON.parse(data));
      }
    }
  },
  mounted() {
    this.saveWebsocketData({
      earth_humidity: "33.73",
      no2: "0",
      earth_ph: "8.49",
      pm25: "26.7",
      so2: "0",
      pm10: "33.2",
      wind_speed: "1.38",
      wind_direction: "202.5",
      co: "34304",
      earth_conductivity: "0",
      earth_temperature: "22.02"
    });

    // createSocket(
    //   // "ws://172.16.166.209:10002/thermalWebSocketHandler?connector=lwq"
    //   "ws://172.16.7.159:20273/thermalWebSocketHandler?connector=lwq"
    // );
    // // 注册监听事件
    // window.addEventListener("onmessageWS", this.getsocketData);
  },
  destroyed() {
    // window.removeEventListener("onmessageWS", this.getsocketData);
  }
};
</script>

<style></style>

import Vue from "vue";
import App from "./App";
import router from "./router";
import axios from  'axios'
Vue.prototype.$http = axios


import store from './store'

import "@/utils/flexFontsize.js"; // 字体自适应
import "normalize.css/normalize.css";
// 浏览器样式默认化

import "@/assets/icon/iconfont.css";

// 全局message(自己写的组件，结果后来要用element，所以痛苦舍弃)
// import Message from "@/components/message/index.js";
// Vue.prototype.$message = Message;

import {
  Message,
  Slider,
  Carousel,
  CarouselItem,
  Select,
  Option
} from "element-ui";
Vue.prototype.$message = Message;
Vue.use(Slider);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Select);
Vue.use(Option);


import "animate.css";

// echarts
import echarts from "echarts";
Vue.prototype.$echarts = echarts;

// echarts全局样式
import "@/dark.js";

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});

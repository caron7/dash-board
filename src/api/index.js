import {get, post} from "@/utils/request";

let api = "";
if (process.env.NODE_ENV == "development") {
  api = "/api";
}

export const getWaterPower = () => get(api + "/equipData/waterPower"); // 获取用水用电指标数据
export const getTempHumidity = () => get(api + "/equipData/tempHumidity"); // 获取温湿度数据

export const getCountByMonth = () => get(api + "/api/visitor/countByMonth"); // 访客统计按月
export const getCountByYear = () => get(api + "/api/visitor/countByYear"); // 访客统计按年

export const getParkData = () => get(api + "/equipData/parkData"); // 获取停车数据

export const saveRecentThermal = (p) => post(api + "/api/temp/saveTemp", p); // 保存自定义数据
export const queryRecentThermal = () => get(api + "/api/temp/queryRecentTemp"); // 获取自定义数据


export const saveLight = params => get("http://172.16.12.232:8002/adjust/light?percent=" + params.percent + "&_=" + new Date().getTime()); // 获取温湿度数据

export const getWeather = () => get("http://wthrcdn.etouch.cn/weather_mini?city=南京"); // 获取天气

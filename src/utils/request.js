import axios from "axios";
import { Message } from "element-ui";

// 创建axios实例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // api 的 base_url
  timeout: 1 * 60 * 1000 // 请求超时时间1分钟
});

// request拦截器
service.interceptors.request.use(
  config => {
    // token 根据具体需要修改
    // if (store.getters.token) {
    // config.headers["accessToken"] = getToken();
    // }
    return config;
  },
  error => {
    // 异常捕获
    console.log(error); // debug
    Promise.reject(error);
  }
);

// response 拦截器
service.interceptors.response.use(
  response => {
    /**
     * code为非200是抛错 可结合自己业务进行修改
     */
    const res = response.data;
    if (res.code === "500") {
      // 错误统一处理
      Message({ message: res.msg, type: "error" });
    } else if (res.data && res.data.code === "401") {
      Message({ message: res.msg, type: "error" });
    }
    return response.data;
  },
  error => {
    console.log("err" + error); // for debug
    Message({
      message: error.message,
      type: "error"
    });
    return Promise.reject(error);
  }
);

export default service;

export function get(url, params = {}) {
  return new Promise((resolve, reject) => {
    service
      .get(url, { params: params })
      .then(response => {
        resolve(response);
      })
      .catch(err => {
        // if (err.response.status == "401") {}
        reject(err);
      });
  });
}
export function post(url, data = {}) {
  return new Promise((resolve, reject) => {
    service.post(url, data).then(
      response => {
        resolve(response);
      },
      err => {
        // if (err.response.status == "401") {}
        reject(err);
      }
    );
  });
}

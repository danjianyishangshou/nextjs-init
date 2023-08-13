/**
 * request 网络请求工具
 */
import { extend } from "umi-request";
import { isClient } from "./utils";
import { getToken, removeToken } from "./token";
// 超时时间
const timeout = 10000;
const timeoutMessage = "当前请求超时，请稍后再试";
type CodeMessage = Record<string, any>;
const codeMessage: CodeMessage = {
  200: "请求成功",
  400: "请求失败，请重试",
  401: "该用户没有权限，请换一个用户试试",
  403: "对不起，请求被拒绝",
  404: "你访问的页面不存在",
  406: "请求格式有误。",
  410: "请求的资源不存在",
  500: "后台出现问题，请等待",
  502: "网关错误",
  503: "服务不可用",
  504: "网关超时"
};

const createController = () => new AbortController();
const request = extend({
  timeout,
  signal: createController().signal,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    Authentication: isClient() ? getToken() : ""
  }
});

// request请求拦截器, 改变url 或 options.
request.interceptors.request.use(
  (url, options) => {
    isClient;
    let token = "";
    if (isClient()) {
      token = getToken();
    }
    if (token) {
      (
        options.headers! as Partial<HeadersInit & { Authorization: string }>
      ).Authorization = `Bearer ${token}`;
    }
    return {
      url,
      options: { ...options, interceptors: true, timeout, timeoutMessage }
    };
  },
  { global: true }
);

// response响应拦截器, 处理response
request.interceptors.response.use((response, options) => {
  if (response.status >= 400) {
    if (response.status === 401) {
      removeToken();
      // 跳转登录页或者重新获取token
    } else {
      throw codeMessage[response.status.toString()];
    }
  }
  return response;
});
// 克隆响应对象做解析处理
request.interceptors.response.use(async (response) => {
  const data = await response.clone().json();
  if (data && data.NOT_LOGIN) {
    location.href = "登录url";
  }
  return response;
});

export default request;

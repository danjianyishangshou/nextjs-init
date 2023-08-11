/**
 * request 网络请求工具
 */
import { extend } from "umi-request";
import { ResponseError } from "umi-request/types";
// 超时时间
const timeout = 10000;
const timeoutMessage = "当前请求超时，请稍后再试";
const codeMessage = {
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
type CodeMessage = {
  [K in keyof typeof codeMessage]: string;
};

const errorHandler = function (error: ResponseError<{ status: number }>) {
  const codeMap: CodeMessage = codeMessage;
  if (error.response) {
    // 请求已发送但服务端返回状态码非 2xx 的响应
    // console.log(error.response.status);
    // console.log(error.response.headers);
    // console.log(error.data);
    // console.log(error.request);

    // console.log((codeMap as Record<string, any>)[error.data.status]);
    if (error.data.status === 401) {
      // 移除token 提示用户重新登录
      alert(codeMap[error.data.status]);
      localStorage.removeItem("token");
    }
  } else {
    // 请求初始化时出错或者没有响应返回的异常
    // console.log(error.message);
  }

  throw error; // 如果throw. 错误将继续抛出.

  // 如果return, 则将值作为返回. 'return;' 相当于return undefined, 在处理结果时判断response是否有值即可.
  //   return { some: "data" };
};

const createController = () => new AbortController();
const request = extend({
  timeout, // 超时时间
  signal: () => createController().signal,
  headers: {
    // headers中搭载token等请求头信息
    "Content-Type": "application/x-www-form-urlencoded",
    Authentication: localStorage.getItem("token") || ""
  },
  // 处理请求错误 调用上面的错误处理逻辑
  errorHandler: errorHandler
});

// request请求拦截器, 改变url 或 options.
request.interceptors.request.use(
  (url, options) => {
    const token = localStorage.getItem("token");
    if (token) {
      (
        options.headers! as Partial<HeadersInit & { Authorization: string }>
      ).Authorization = `Bearer ${token}`;
    }
    return {
      url: `${url}&interceptors=yes`,
      options: { ...options, interceptors: true, timeout, timeoutMessage }
    };
  },
  { global: true }
);

// response响应拦截器, 处理response
request.interceptors.response.use((response, options) => {
  if (options.status >= 400) {
    switch (response.status) {
      case 401:
        break;
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

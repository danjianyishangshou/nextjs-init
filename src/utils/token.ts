/**
 * 获取token
 * @returns token
 */
export const getToken = () => localStorage.getItem("token") ?? "";
/**
 * 设置token
 * @param token
 * @returns
 */
export const setToken = (token: string) => localStorage.setItem("token", token);
/**
 * 移除token
 * @returns
 */
export const removeToken = () => localStorage.removeItem("token");
/**
 * 是否登录
 * @returns
 */
export const isAuth = () => !!getToken();

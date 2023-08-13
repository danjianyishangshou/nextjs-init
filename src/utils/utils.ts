/**
 * 是否是客户端
 * @returns
 */
export const isClient = () => (typeof window === "undefined" ? false : true);

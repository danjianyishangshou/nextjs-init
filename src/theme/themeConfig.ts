import type { ThemeConfig } from "antd";
import { theme as themeDefault } from "antd";
const { darkAlgorithm, compactAlgorithm } = themeDefault;
const theme: ThemeConfig = {
  token: {
    fontSize: 16,
    borderRadius: 2,
    // Seed Token，影响范围大
    colorPrimary: "#1f55f5"
    // 派生变量，影响范围小
    // colorBgContainer: "#f6ffed"
  },
  // 组合使用暗色算法与紧凑算法
  algorithm: [darkAlgorithm, compactAlgorithm]
};

export default theme;

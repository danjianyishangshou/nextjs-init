import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import StyledComponentsRegistry from "../lib/AntdRegistry";
import { ConfigProvider } from "antd";
import theme from "../theme/themeConfig";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CLGG 车轮滚滚",
  keywords:
    "车轮滚滚,物流,物流保险,物流网,物流公司,物流配货,融资,空车配货,回程车,车源,货源网,货源信息,物流信息网,物流信息,货运信息,货运司机,货主,车主, www.clgg.com",
  description:
    "车轮滚滚--为客户提供运费保理，卡车租赁、动态运输及车辆管理系统、正品零部件供应、维修与保养定制化、保险等一体化服务，降低运营成本，扩大生意规模，提高你的运输及车辆管理效率。"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense fallback={<>加载中</>}>
          <ConfigProvider theme={theme}>
            <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
          </ConfigProvider>
        </Suspense>
      </body>
    </html>
  );
}

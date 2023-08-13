import { setTitles } from "@/hooks";
import { getCategoryList } from "@/servers/home/category";
import React from "react";
import NewList from "./components/NewList";



export const metadata = setTitles("新闻页");

const News = async () => {
  const { data } = await getCategoryList();
  return (
    <div>
      {/* <Head>CLGG 关于页</Head> */}
      News
      <NewList data={[]}></NewList>
    </div>
  );
};

export default News;

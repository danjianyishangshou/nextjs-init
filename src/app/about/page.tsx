"use client";

import style from "./styles.module.scss";
import React from "react";
import { Button } from "antd";
export const metadata = {
  title: "CLGG 关于页"
};
const About = () => {
  return (
    <div className={style.root}>
      <main className="main">
        about
        <Button type="primary">按钮</Button>
      </main>
    </div>
  );
};

export default About;

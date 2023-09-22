"use client";
import React from "react";
import { Container } from "@/components/container/Container";
import style from "./style.module.css";
import { useState } from "react";
import { Framer } from "./Framer";
import { useTabs } from "./useTabs";
import { Circle, Square, Triangle } from "./shapes";

export default function Tabs() {
  const [hookProps] = useState({
    tabs: [
      {
        label: "Circle",
        children: <Circle />,
        id: "Circle",
      },
      {
        label: "Triangle",
        children: <Triangle />,
        id: "Triangle",
      },
      {
        label: "Square",
        children: <Square />,
        id: "Square",
      },
    ],
    initialTabId: "Triangle",
  });
  const framer = useTabs(hookProps);
  return (
    <section className={style.tabs}>
      <Container>
        <h2 className={style.tabs__title}>tabs</h2>
        <div className={style.tabs__box}>
          <div className={style.inner__box}>
            <Framer.TabsBody {...framer.tabProps} />
            <Framer.Content
              {...framer.contentProps}
              className={style.inner__content}
            >
              {framer.selectedTab.children}
            </Framer.Content>
          </div>
        </div>
      </Container>
    </section>
  );
}

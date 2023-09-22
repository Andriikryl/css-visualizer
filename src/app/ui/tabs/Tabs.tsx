import React from "react";
import { Container } from "@/components/container/Container";
import style from "./style.module.css";

export default function Tabs() {
  return (
    <section className={style.tabs}>
      <Container>
        <h2 className={style.tabs__title}>tabs</h2>
        <div></div>
      </Container>
    </section>
  );
}

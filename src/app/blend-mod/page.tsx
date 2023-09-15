"use client";
import React from "react";
import { Container } from "@/components/container/Container";
import style from "./style.module.css";
import BlandList from "./blandList/BlandList";
import BlandConstructor from "./blandConstructor/BlandConstructor";
import TitleBlock from "@/components/TitleBlock/TitleBlock";

export default function BlendMod() {
  return (
    <section className={style.blend}>
      <Container>
        <TitleBlock text="Blend Mode" />
        <BlandConstructor />
        <BlandList />
      </Container>
    </section>
  );
}

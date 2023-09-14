"use client";
import React from "react";
import { Container } from "@/components/container/Container";
import style from "./style.module.css";
import BlandList from "./blandList/BlandList";
import BlandConstructor from "./blandConstructor/BlandConstructor";

export default function BlendMod() {
  return (
    <section className={style.blend}>
      <Container>
        <h1 className={style.blend__title}>Blend Mode</h1>
        <BlandConstructor />
        <BlandList />
      </Container>
    </section>
  );
}

import React from "react";
import TitleBlock from "@/components/TitleBlock/TitleBlock";
import { Container } from "@/components/container/Container";
import style from "./style.module.css";

export default function HeroD() {
  return (
    <section className={style.hero}>
      <Container>
        <TitleBlock text="3d" />
      </Container>
    </section>
  );
}

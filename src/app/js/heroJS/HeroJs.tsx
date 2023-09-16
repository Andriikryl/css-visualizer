import React from "react";
import { Container } from "@/components/container/Container";
import TitleBlock from "@/components/TitleBlock/TitleBlock";
import style from "./style.module.css"

export default function HeroJs() {
  return (
    <section className={style.js__section}>
      <Container>
        <TitleBlock text="js" />
      </Container>
    </section>
  );
}

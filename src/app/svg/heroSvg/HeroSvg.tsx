import React from "react";
import style from "./style.module.css";
import { Container } from "@/components/container/Container";
import TitleBlock from "@/components/TitleBlock/TitleBlock";

export default function HeroSvg() {
  return (
    <section className={style.svg__section}>
      <Container>
        <div>
          <TitleBlock text="svg" />
        </div>
      </Container>
    </section>
  );
}

import React from "react";
import TitleBlock from "@/components/TitleBlock/TitleBlock";
import { Container } from "@/components/container/Container";
import style from "./style.module.css";

export default function HeroUi() {
  return (
    <section className={style.ui}>
      <Container>
        <div>
          <TitleBlock text="ui" />
        </div>
      </Container>
    </section>
  );
}

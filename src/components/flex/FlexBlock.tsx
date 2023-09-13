import React from "react";
import { Container } from "../container/Container";
import style from "./style.module.css";
import JustyfContent from "./justyfContent/JustyfContent";
export default function FlexBlock() {
  return (
    <section className={style.flex__section}>
      <Container>
        <JustyfContent />
      </Container>
    </section>
  );
}

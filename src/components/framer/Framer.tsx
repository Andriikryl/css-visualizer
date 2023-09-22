import React from "react";
import { Container } from "../container/Container";
import style from "./style.module.css";
import Starter from "./starter/Starter";

export default function Framer() {
  return (
    <section className={style.framer__section}>
      <Container>
        <h3 className={style.framer__title}>Framer motion</h3>
        <Starter />
      </Container>
    </section>
  );
}

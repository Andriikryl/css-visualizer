import React from "react";
import style from "./style.module.css";
import { Container } from "../container/Container";

export default function Hero() {
  return (
    <section className={style.hero}>
      <Container>
        <div className={style.hero__box}></div>
      </Container>
    </section>
  );
}

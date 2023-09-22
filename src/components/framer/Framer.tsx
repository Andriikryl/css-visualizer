import React from "react";
import { Container } from "../container/Container";
import style from "./style.module.css";
import Starter from "./starter/Starter";
import Transition from "./transition/Transition";
import LayoutAnimation from "./layoutAnimation/LayoutAnimation";
import GesturesAnimation from "./gesturesAnimation/GesturesAnimation";

export default function Framer() {
  return (
    <section className={style.framer__section}>
      <Container>
        <h3 className={style.framer__title}>Framer motion</h3>
        <Starter />
        <Transition />
        <LayoutAnimation />
        <GesturesAnimation />
      </Container>
    </section>
  );
}

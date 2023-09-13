import React from "react";
import { Container } from "../container/Container";
import style from "./style.module.css";
import JustyfContent from "./justyfContent/JustyfContent";
import SpacePos from "./spacePos/SpacePos";
export default function FlexBlock() {
  return (
    <section className={style.flex__section}>
      <Container>
        <div className={style.flex__group}>
          <JustyfContent />
          <SpacePos />
        </div>
      </Container>
    </section>
  );
}

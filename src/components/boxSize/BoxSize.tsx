import React from "react";
import { Container } from "../container/Container";
import style from "./style.module.css";
export default function BoxSize() {
  return (
    <section className={style.boxSize}>
      <Container>
        <h4 className={style.boxSize__title}>box sizing</h4>
        <div className={style.box}>
          <span className={style.margin}>margin</span>
          <div className={style.border}>
            <span>border</span>
            <div className={style.padding}>
              <span>padding</span>
              <div className={style.content}>
                <span>content box</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

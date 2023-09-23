"use client";
import React, { useState } from "react";
import { Container } from "@/components/container/Container";
import style from "./style.module.css";
import { MainField } from "@/components/mainField/MainField";
import { InputFrame } from "@/components/inputFrame/InputFrame";
export default function Line() {
  const [x1, setX1] = useState(50);
  const [y1, setY1] = useState(300);
  const [x2, setX2] = useState(375);
  const [y2, setY2] = useState(50);
  return (
    <section className={style.line}>
      <Container>
        <h4 className={style.line__title}>Line</h4>
        <MainField className={style.line__box}>
          <svg viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
            <line
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#ffc300"
              stroke-width="25"
            />
          </svg>
        </MainField>
        <InputFrame value={x1} set={setX1} min={0} max={800}>
          r
        </InputFrame>
        <InputFrame value={x2} set={setX2} min={0} max={800}>
          cx
        </InputFrame>
        <InputFrame value={y1} set={setY1} min={0} max={800}>
          cy
        </InputFrame>
        <InputFrame value={y2} set={setY2} min={0} max={800}>
          r
        </InputFrame>
        <p className={style.code__box}>
          line x1=&quot;<span className={style.code__style}>{x1}</span>&quot;
          y1=&quot;<span className={style.code__style}>{y1}</span>&quot;
          x2=&quot;<span className={style.code__style}>{x2}</span>&quot;
          y2=&quot;<span className={style.code__style}>{y2}</span>&quot;
        </p>
      </Container>
    </section>
  );
}

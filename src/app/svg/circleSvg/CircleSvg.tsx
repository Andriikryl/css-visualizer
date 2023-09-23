"use client";
import React, { useState } from "react";
import { Container } from "@/components/container/Container";
import { MainField } from "@/components/mainField/MainField";
import style from "./style.module.css";
import { InputFrame } from "@/components/inputFrame/InputFrame";

export default function CircleSvg() {
  const [r, setR] = useState(245);
  const [cx, setCx] = useState(400);
  const [cy, setCy] = useState(400);
  return (
    <section className={style.circel}>
      <Container>
        <h4 className={style.circel__title}>Circle</h4>
        <MainField className={style.box}>
          <svg viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
            <circle
              r={r}
              cx={cx}
              cy={cy}
              fill="#ffc300"
              stroke="#ffb703"
              stroke-width="10"
            />
          </svg>
        </MainField>
        <InputFrame value={r} set={setR} min={1} max={475}>
          r
        </InputFrame>
        <InputFrame value={cx} set={setCx} min={0} max={800}>
          cx
        </InputFrame>
        <InputFrame value={cy} set={setCy} min={0} max={800}>
          cy
        </InputFrame>
      </Container>
    </section>
  );
}

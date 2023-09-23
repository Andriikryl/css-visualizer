"use client";
import React, { useState } from "react";
import { Container } from "@/components/container/Container";
import { MainField } from "@/components/mainField/MainField";
import style from "./style.module.css";
import { InputFrame } from "@/components/inputFrame/InputFrame";

export default function ViewBox() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [width, setWidth] = useState(800);
  const [heigth, setHeigth] = useState(800);
  return (
    <section className={style.box}>
      <Container>
        <h3 className={style.box__title}>View Box</h3>
        <p className={style.box__description}>
          Every element within the SVG will relate to the coordinate system
          defined by the viewBox attribute.
        </p>
        <MainField className={style.svg__box}>
          <svg
            viewBox={`${x} ${y} ${width} ${heigth}`}
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="200"
              y="200"
              width="400"
              height="400"
              fill="#EACF44"
            ></rect>
          </svg>
        </MainField>
        <InputFrame value={x} set={setX} min={-400} max={800}>
          min-x
        </InputFrame>
        <InputFrame value={y} set={setY} min={-400} max={800}>
          min-y
        </InputFrame>
        <InputFrame value={width} set={setWidth} min={1} max={1200}>
          width
        </InputFrame>
        <InputFrame value={heigth} set={setHeigth} min={1} max={1200}>
          height
        </InputFrame>
        <div className={style.code__box}>
          <span>
            {" "}
            <span className={style.view}>viewBox</span>={x},{y},{width},{heigth}
          </span>
        </div>
      </Container>
    </section>
  );
}

"use client";
import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import { Container } from "@/components/container/Container";
import Button from "@/components/button/Button";

export default function PropDrilling() {
  const [isAnimationActive, setIsAnimationActive] = useState(false);

  // Function to start the animation when the button is clicked
  const startAnimation = () => {
    setIsAnimationActive(true);
  };
  return (
    <section className={style.drilling}>
      <Container>
        <h2 className={style.drilling__title}>Prop drilling</h2>
        <div className={style.drilling__box}>
          <Button text="add prop" onClick={startAnimation}></Button>
          <div
            className={`${style.cicel} ${
              isAnimationActive ? style.active : ""
            }`}
          />
          <div className={style.component__box}>
            <span className={style.component__title}>App</span>
          </div>
          <div className={style.component__box}>
            <span className={style.component__title}>Component A</span>
          </div>
          <div className={style.component__box}>
            <span className={style.component__title}>Component B</span>
          </div>
          <div className={style.component__box}>
            <span className={style.component__title}>Component C</span>
          </div>
          <div className={style.component__box}>
            <span className={style.component__title}>Component D</span>
          </div>
        </div>
      </Container>
    </section>
  );
}

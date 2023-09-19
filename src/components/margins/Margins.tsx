"use client";
import React, { useState } from "react";
import { Container } from "../container/Container";
import style from "./style.module.css";
import { MainField } from "../mainField/MainField";
import InnerBox from "../innerBox/InnerBox";
import Button from "../button/Button";
import clsx from "clsx";
export default function Margins() {
  const [firstChil, setFirstChil] = useState(false);
  const [secondChil, setSecondChil] = useState(false);
  const [thirdChil, setThirdChil] = useState(false);
  function handelClickFirst() {
    setFirstChil(true);
    setSecondChil(false);
    setThirdChil(false);
  }
  function handelClickSecond() {
    setSecondChil(true);
    setFirstChil(false);
    setThirdChil(false);
  }
  function handelClickTherd() {
    setThirdChil(true);
    setFirstChil(false);
    setSecondChil(false);
  }
  return (
    <section className={style.margin__section}>
      <Container>
        <h4 className={style.margin__title}>margin <span className={style.inprogress}>in progress</span></h4>
        <div className={style.margin__box}>
          <MainField className={style.box}>
            <InnerBox
              onClick={handelClickFirst}
              className={clsx({
                [style.left]: firstChil,
              })}
            />
            <InnerBox
              onClick={handelClickSecond}
              className={clsx({
                [style.left]: secondChil,
              })}
            />
            <InnerBox
              onClick={handelClickTherd}
              className={clsx({
                [style.left]: thirdChil,
              })}
            />
          </MainField>
        </div>
      </Container>
    </section>
  );
}

"use client";
import React from "react";
import style from "./style.module.css";
import { Container } from "@/components/container/Container";
import { MainField } from "@/components/mainField/MainField";
import InnerBox from "@/components/innerBox/InnerBox";

export default function Moving() {
  return (
    <section className={style.moving__section}>
      <Container>
        <h2 className={style.moving__title}>Moving</h2>
        <div className={style.flex__group}>
          <div className={style.inner__box}>
            <h3 className={style.box__description}>X movement</h3>
            <MainField className={style.moving__box}>
              <InnerBox className={style.dotX} />
            </MainField>
          </div>
          <div className={style.inner__box}>
            <h3 className={style.box__description}>Y movement</h3>
            <MainField className={style.moving__box}>
              <InnerBox className={style.dotY} />
            </MainField>
          </div>
          <div className={style.inner__box}>
            <h3 className={style.box__description}>Combined</h3>
            <MainField className={style.moving__box}>
              <InnerBox className={style.dot} />
            </MainField>
          </div>
          <div className={style.inner__box}>
            <h3 className={style.box__description}>Curved path</h3>
            <MainField className={style.moving__box}>
              <InnerBox className={style.dotB} />
            </MainField>
          </div>
        </div>
      </Container>
    </section>
  );
}

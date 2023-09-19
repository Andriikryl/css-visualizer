"use client";
import React from "react";
import { Container } from "@/components/container/Container";
import style from "./style.module.css";
import { defaultFAQs } from "./defaultValues.tsx";
import Accordion from "@/components/accordion/Accordion";
import Menu from "./menu/Menu";

export default function UseRedurecHook() {
  return (
    <section className={style.reducer}>
      <Container>
        <h3 className={style.reducer__title}>useReducer hook</h3>
        <div>
          <pre className={style.code__box}>
            <code className={style.code}>
              const [state, dispatch ] = useReducer(reducer, initialArg,init?)
            </code>
          </pre>
          <div className={style.faq__box}>
            {defaultFAQs.map((faq, i) => (
              <Accordion key={i} title={faq.question} body={faq.answer} />
            ))}
          </div>
          <Menu />
        </div>
      </Container>
    </section>
  );
}

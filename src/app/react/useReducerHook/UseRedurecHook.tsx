"use client";
import React from "react";
import { Container } from "@/components/container/Container";
import style from "./style.module.css";
import { defaultFAQs } from "./defaultValues.tsx";
import Accordion from "@/components/accordion/Accordion";
import Menu from "./menu/Menu";
import { Steps } from "./steps/Steps";

const stepsData = ["Step 1 content", "Step 2 content", "Step 3 content"];

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
          <p className={style.exemples}>useReducer exemples</p>
          <Menu />
          <div>
            <Steps steps={stepsData} />
          </div>
        </div>
      </Container>
    </section>
  );
}

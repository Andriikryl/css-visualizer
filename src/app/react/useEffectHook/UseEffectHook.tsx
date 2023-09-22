import React from "react";
import style from "./style.module.css";
import { Container } from "@/components/container/Container";
import { defaultEffectFAQs } from "./defaultEffectValues";
import Accordion from "@/components/accordion/Accordion";
export default function UseEffectHook() {
  return (
    <section className={style.effect__section}>
      <Container>
        <h4 className={style.effect__title}>useEffect hook</h4>
        <code className={style.code}>
          <span>useEffect(setup,dependencies )</span>
        </code>
        <div className={style.faq__box}>
          {defaultEffectFAQs.map((faq, i) => (
            <Accordion key={i} title={faq.question} body={faq.answer} />
          ))}
        </div>
      </Container>
    </section>
  );
}

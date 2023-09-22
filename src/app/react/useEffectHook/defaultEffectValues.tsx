import { ReactNode } from "react";
import style from "./style.module.css";

export type FAQ = { question: string; answer: ReactNode };

export const defaultEffectFAQs: FAQ[] = [
  {
    question: " setup ?",
    answer: (
      <div className={style.accordion__box}>
        <p className={style.accordion__body}>
          Parameter: setup function setup <br />
          The function with your Effect’s logic. Your setup function may also
          optionally return a cleanup function. When your component is first
          added to the DOM, React will run your setup function. After every
          re-render with changed dependencies, React will first run the cleanup
          function (if you provided it) with the old values, and then run your
          setup function with the new values. After your component is removed
          from the DOM, React will run your cleanup function one last time.{" "}
          <br />
          setup()
        </p>
      </div>
    ),
  },
  {
    question: " dependencies ?",
    answer: (
      <div className={style.accordion__box}>
        <p className={style.accordion__body}>
          Optional Parameter: dependencies array dependency list <br />
          The list of all reactive values referenced inside of the setup code.
          If you don’t specify the dependencies at all, your Effect will re-run
          after every re-render of the component.
        </p>
      </div>
    ),
  },
];

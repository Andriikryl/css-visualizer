import { ReactNode } from "react";
import style from "./style.module.css";

export type FAQ = { question: string; answer: ReactNode };

export const defaultFAQs: FAQ[] = [
  {
    question: "State ?",
    answer: (
      <div className={style.accordion__box}>
        <p className={style.accordion__body}>
          Returns: state any <br /> The current state
        </p>
      </div>
    ),
  },
  {
    question: "dispatch ?",
    answer: (
      <div className={style.accordion__box}>
        <p className={style.accordion__body}>
          Returns: dispatch function <br />
          The dispatch function that lets you update the state to a different
          value and trigger a re-render. <br />
          dispatch(action)
        </p>
      </div>
    ),
  },
  {
    question: "reducer?",
    answer: (
      <div className={style.accordion__box}>
        <p className={style.accordion__body}>
          Parameter: reducer function pure <br />
          The reducer function that specifies how the state gets updated. It
          must be pure, should take the state and action as arguments, and
          should return the next state. <br />
          const nextState = reducer(state, action)
        </p>
      </div>
    ),
  },
  {
    question: "initialArg?",
    answer: (
      <div className={style.accordion__box}>
        <p className={style.accordion__body}>
          Parameter: initialArg any <br />
          The value from which the initial state is calculated. <br />
        </p>
      </div>
    ),
  },
  {
    question: "init?",
    answer: (
      <div className={style.accordion__box}>
        <p className={style.accordion__body}>
          Optional Parameter: init function pure
          <br />
          The initializer function that specifies how the initial state is
          calculated. If it’s not specified, the initial state is set to
          initialArg. Otherwise, the initial state is set to the result of
          calling init(initialArg). <br />
          const initialState = init(initialArg)
        </p>
      </div>
    ),
  },
];

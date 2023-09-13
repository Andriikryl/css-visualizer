import React from "react";
import style from "./style.module.css";

interface TaskDescription {
  qustion: string;
  answer: string;
}

export default function TaskDescription({ qustion, answer }: TaskDescription) {
  return (
    <span className={style.task__description}>
      {qustion}: <span className={style.answer}> {answer}</span>;{" "}
    </span>
  );
}

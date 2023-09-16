import React from "react";
import style from "./style.module.css";

interface CurveText {
  text: string;
}

export default function CurveTitle({ text }: CurveText) {
  return <h4 className={style.curve__title}>{text}</h4>;
}

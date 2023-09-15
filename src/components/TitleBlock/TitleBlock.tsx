import React from "react";
import style from "./style.module.css";
interface TitleBlock {
  text: string;
}

export default function TitleBlock({ text }: TitleBlock) {
  return <h1 className={style.title}>{text}</h1>;
}

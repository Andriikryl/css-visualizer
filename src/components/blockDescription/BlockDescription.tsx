import React from "react";
import style from "./style.module.css";

interface BlockDescription {
  text: string;
}

export default function BlockDescription({ text }: BlockDescription) {
  return <span className={style.box__description}>{text}</span>;
}

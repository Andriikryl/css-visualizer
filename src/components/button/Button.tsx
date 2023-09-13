import React from "react";
import style from "./style.module.css";

interface IButtonProps {
  text: string;
  onClick: () => void;
}

export default function Button({ text, onClick }: IButtonProps) {
  return (
    <button className={style.button} onClick={onClick}>
      {text}
    </button>
  );
}

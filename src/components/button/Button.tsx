import React from "react";
import style from "./style.module.css";
import clsx from "clsx";

interface IButtonProps {
  text: string;
  onClick: () => void;
  className?: string;
}

export default function Button({ text, onClick, className }: IButtonProps) {
  return (
    <button className={clsx(style.button, className)} onClick={onClick}>
      {text}
    </button>
  );
}

import React from "react";
import style from "./style.module.css";
import clsx from "clsx";

export default function Cube() {
  return (
    <div className={style.container}>
      <div className={clsx(style.cube)}>
        <div className={clsx(style.face, style.top)}>Top</div>
        <div className={clsx(style.face, style.bottom)}>Bottom</div>
        <div className={clsx(style.face, style.left)}>Left</div>
        <div className={clsx(style.face, style.right)}>Right</div>
        <div className={clsx(style.face, style.front)}>Front</div>
        <div className={clsx(style.face, style.back)}>Back</div>
      </div>
    </div>
  );
}

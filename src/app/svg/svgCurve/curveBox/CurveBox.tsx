import React, { ReactNode } from "react";
import style from "./style.module.css";
interface CureveBox {
  children: ReactNode;
}

export default function CurveBox({ children }: CureveBox) {
  return <div className={style.curve__box}>{children}</div>;
}

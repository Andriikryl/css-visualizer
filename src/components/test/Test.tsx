"use client";
import React, { useEffect } from "react";
import style from "./style.module.css";
import { useAnimate } from "framer-motion";

export default function Test() {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const animation = async () => {
      await animate(scope.current, { x: 100 });
      animate("li", { opacity: 1 });
    };

    animation();
  }, [animate, scope]);

  return (
    <div>
      <ul ref={scope} className={style.list}>
        <li className={style.list__item}>one</li>
        <li className={style.list__item}>one</li>
        <li className={style.list__item}>one</li>
        <li className={style.list__item}>one</li>
        <li className={style.list__item}>one</li>
        <li className={style.list__item}>one</li>
      </ul>
    </div>
  );
}

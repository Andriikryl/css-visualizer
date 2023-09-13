"use client";
import React, { useState } from "react";
import style from "./style.module.css";
import clsx from "clsx";
import { motion } from "framer-motion";
import Button from "@/components/button/Button";

export default function JustyfContent() {
  const [end, setEnd] = useState(false);
  const [center, setCenter] = useState(false);
  const [start, setStart] = useState(false);
  const handleClickStart = () => {
    setStart(true);
    setEnd(false);
    setCenter(false);
  };
  const handleClickEnd = () => {
    setEnd(true);
    setStart(false);
    setCenter(false);
  };
  const handleClickCenter = () => {
    setCenter(true);
    setEnd(false);
    setStart(false);
  };

  let justifyContentValue = "_____   ";

  if (start) {
    justifyContentValue = "flex-start";
  } else if (center) {
    justifyContentValue = "center";
  } else if (end) {
    justifyContentValue = "flex-end";
  }

  return (
    <div>
      <span className={style.task__description}>
        justify-content: {justifyContentValue};{" "}
      </span>
      <div className={style.flex__group}>
        <Button text={"Start"} onClick={handleClickStart} />
        <Button text={"Center"} onClick={handleClickCenter} />
        <Button text={"End"} onClick={handleClickEnd} />
      </div>
      <motion.div
        className={clsx(style.box, {
          [style.centered]: center,
          [style.ended]: end,
          [style.started]: start,
        })}
      >
        <motion.div
          className={clsx(style.inner__box)}
          layout
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{
            opacity: 0,
            x: -200,
          }}
          transition={{ opacity: { duration: 0.6 }, x: { duration: 1.2 } }}
        ></motion.div>
      </motion.div>
      <span className={style.box__description}>flex container</span>
    </div>
  );
}

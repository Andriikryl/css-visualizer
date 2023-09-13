"use client";
import React, { useState } from "react";
import { Container } from "../container/Container";
import style from "./style.module.css";
import clsx from "clsx";
import { motion } from "framer-motion";

export default function FlexBlock() {
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

  return (
    <section className={style.flex__section}>
      <Container>
        <button onClick={handleClickStart}>Start</button>
        <button onClick={handleClickEnd}>End</button>
        <button onClick={handleClickCenter}>Center</button>
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
      </Container>
    </section>
  );
}

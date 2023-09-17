"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import style from "./style.module.css";
import Button from "@/components/button/Button";
export default function RePenReg() {
  const [animationResolve, setAnimationresolve] = useState(false);
  const [animationPending, setAnimatinPending] = useState(false);
  const [animationRegect, setAnimationRegect] = useState(false);

  const startAnimationResolve = () => {
    setAnimationresolve(true);
    setAnimatinPending(false);
    setAnimationRegect(false);
  };
  const startAnimationPending = () => {
    setAnimatinPending(true);
    setAnimationresolve(false);
    setAnimationRegect(false);
  };
  const startAnimationRegect = () => {
    setAnimationRegect(true);
    setAnimationresolve(false);
    setAnimatinPending(false);
  };

  const animationStyles = animationResolve
    ? {
        y: -170,
        borderRadius: "50%",
        backgroundColor: "#06d6a0",
      }
    : animationPending
    ? {
        y: 0,
      }
    : animationRegect
    ? {
        y: 170,
        borderRadius: "50%",
        backgroundColor: "#ff3333",
      }
    : {};
  return (
    <div>
      <p className={style.text__Info}>
        A promise can be in one of three states:
      </p>
      <div className={style.flex__box}>
        <div className={style.animation__block}>
          <div className={style.resolve}></div>
          <div className={style.pending}>
            <motion.div
              className={style.motion__box}
              layout
              initial={{ y: 0 }}
              animate={animationStyles}
              transition={{
                y: { duration: 0.8 },
              }}
            ></motion.div>
          </div>
          <div className={style.regect}></div>
        </div>
        <motion.div
          className={style.description__block}
          layout
          initial={{ y: 0 }}
          animate={animationStyles}
          transition={{
            y: { duration: 0.9 },
          }}
        >
          {animationResolve && (
            <motion.p className={style.resolve__description}>
              Fulfilled: The action relating to the promise succeeded
            </motion.p>
          )}
          {animationPending && (
            <motion.p className={style.pending__description}>
              Pending: The promise hasn’t fulfilled or rejected yet
            </motion.p>
          )}
          {animationRegect && (
            <motion.p className={style.regect__description}>
              Rejected: The action relating to the promise failed
            </motion.p>
          )}
        </motion.div>
      </div>
      <div className={style.button__group}>
        <Button text={"Fulfilled"} onClick={startAnimationResolve} />
        <Button text="Pendibg" onClick={startAnimationPending} />
        <Button text="Regect" onClick={startAnimationRegect} />
      </div>
    </div>
  );
}

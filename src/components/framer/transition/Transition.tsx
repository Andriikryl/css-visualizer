"use client";
import React, { useState } from "react";
import { MainField } from "@/components/mainField/MainField";
import { motion } from "framer-motion";
import style from "./style.module.css";
import { InputFrame } from "../InputFrame";

export default function Transition() {
  return (
    <div className={style.transition__section}>
      <h3 className={style.transition__title}>Transition</h3>
      <MainField className={style.transition__box}>
        <motion.div
          className={style.inner__box}
          initial={{
            x: 0,
          }}
          animate={{
            x: [0, 410, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            stiffness: 200,
            mass: 200,
            damping: 5,
          }}
        ></motion.div>
      </MainField>
    </div>
  );
}

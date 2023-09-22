"use client";
import React, { useState } from "react";
import { MainField } from "@/components/mainField/MainField";
import { AnimatePresence, motion } from "framer-motion";
import style from "./style.module.css";

export default function GesturesAnimation() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={style.gestures__box}>
      <h4 className={style.gestures__title}>Gestures animations</h4>
      <MainField className={style.box}>
        <motion.div
          onHoverStart={() => setIsOpen(!isOpen)}
          onHoverEnd={() => setIsOpen(!isOpen)}
          className={style.inner__box}
        >
          <span className={style.inner__hover}>hover box</span>
        </motion.div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className={style.hover__box}
              initial={{ opacity: 0, x: 0 }}
              animate={{ opacity: 1, x: 200 }}
              transition={{ duration: 1 }}
              exit={{ opacity: 0 }}
            >
              <p className={style.hover__text}>hovered</p>
            </motion.div>
          )}
        </AnimatePresence>
      </MainField>
    </div>
  );
}

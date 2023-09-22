"use client";
import React, { useState } from "react";
import style from "./style.module.css";
import { motion } from "framer-motion";
export default function LayoutAnimation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isBox, setIsBox] = useState(false);
  return (
    <div className={style.layout}>
      <h4 className={style.layout__title}>Layout animation</h4>
      <div className={style.motion__box}>
        <motion.div
          layout
          data-isOpen={isOpen}
          initial={{ borderRadius: 50 }}
          animate={{ borderRadius: isOpen ? 0 : 50 }}
          className={style.parent}
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.div
            layout
            className={style.child}
            data-isOpen={isOpen}
            initial={{ borderRadius: 50 }}
            animate={{ borderRadius: isOpen ? 0 : 50 }}
          />
        </motion.div>
        <motion.div
          layout
          data-isOpen={isBox}
          className={style.box}
          onClick={() => setIsBox(!isBox)}
        ></motion.div>
      </div>
    </div>
  );
}

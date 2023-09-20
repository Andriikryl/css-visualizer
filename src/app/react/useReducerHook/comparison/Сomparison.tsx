"use client";
import React, { useCallback, useReducer, useState } from "react";
import { motion } from "framer-motion";
import style from "./style.module.css";

export default function Сomparison() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenRed, toggleOpenRed] = useReducer(
    (prevIsOpen) => !prevIsOpen,
    false
  );

  const toggleOpen = useCallback(
    () => setIsOpen((prevIsOpen) => !prevIsOpen),
    []
  );

  return (
    <>
      <h4 className={style.main__title}>Сomparison</h4>
      <div className={style.flex__group}>
        <div className={style.inner__box}>
          <h3 className={style.comparison__title}>useState</h3>
          <motion.button
            className={style.button}
            layout
            id="motion"
            onClick={toggleOpen}
          >
            <motion.span
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ delay: 0.2 }}
            >
              {isOpen ? "true" : "false"}
            </motion.span>
          </motion.button>

          <code className={style.code}>
            const [isOpen, setIsOpen] = useState(false);
          </code>
        </div>
        <div className={style.inner__box}>
          <h3 className={style.comparison__title}>useReducer</h3>
          <motion.button
            className={style.button}
            layout
            id="motion"
            onClick={toggleOpenRed}
          >
            <motion.span
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ delay: 0.2 }}
            >
              {isOpenRed ? "true" : "false"}
            </motion.span>
          </motion.button>

          <code className={style.code}>
            const [isOpenRed, toggleOpenRed] = useReducer( (prevIsOpen) =&gt;
            !prevIsOpen, false );
          </code>
        </div>
      </div>
    </>
  );
}

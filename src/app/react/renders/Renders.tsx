"use client";
import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import { Container } from "@/components/container/Container";
import { AnimatePresence, motion } from "framer-motion";
import { MainField } from "@/components/mainField/MainField";
import Button from "@/components/button/Button";

export default function Renders() {
  const [state, updateState] = useState(false);
  const handelClickState = () => {
    updateState((prevState) => !prevState);
  };
  useEffect(() => {
    if (state) {
      setTimeout(() => {
        updateState((prevState) => !prevState);
      }, 3000);
    }
  }, [state]);
  return (
    <section className={style.render}>
      <Container>
        <h4 className={style.render__title}>Renders</h4>
        <MainField className={style.main__component}>
          <AnimatePresence>
            {state && (
              <motion.span
                layout
                className={style.render__mess}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                exit={{ opacity: 0 }}
              >
                render
              </motion.span>
            )}
          </AnimatePresence>
          <span className={style.component__title}>Component A</span>
          <Button text="update state" onClick={handelClickState} />
          <motion.div className={style.component__b} layout>
            <AnimatePresence>
              {state && (
                <motion.span
                  className={style.render__mess}
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  exit={{ opacity: 0 }}
                >
                  render
                </motion.span>
              )}
            </AnimatePresence>
            <span className={style.component__title}>Component B</span>
            <motion.div className={style.component__c} layout>
              <AnimatePresence>
                {state && (
                  <motion.span
                    className={style.render__mess}
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    exit={{ opacity: 0 }}
                  >
                    render
                  </motion.span>
                )}
              </AnimatePresence>
              <span className={style.component__title}>Component C</span>
              <motion.div className={style.component__d} layout>
                <AnimatePresence>
                  {state && (
                    <motion.span
                      className={style.render__mess}
                      initial={{ opacity: 0, y: 100 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, delay: 0.7 }}
                      exit={{ opacity: 0 }}
                    >
                      render
                    </motion.span>
                  )}
                </AnimatePresence>
                <span className={style.component__title}>Component D</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </MainField>
      </Container>
    </section>
  );
}

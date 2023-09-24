"use client";
import React, { useState } from "react";
import { Container } from "@/components/container/Container";
import { MainField } from "@/components/mainField/MainField";
import { AnimatePresence, motion } from "framer-motion";
import style from "./style.module.css";
import Button from "@/components/button/Button";

export default function Track() {
  const [showRenderMess, setShowRenderMess] = useState(false);
  const [showRenderMessA, setShowRenderMessA] = useState(false);
  const [showRenderMessB, setShowRenderMessB] = useState(false);
  const [showRenderMessC, setShowRenderMessC] = useState(false);
  const handelClickCount = () => {
    setShowRenderMess(true);
    setShowRenderMessA(true);
    setShowRenderMessB(true);
    setShowRenderMessC(true);
    setTimeout(() => {
      setShowRenderMess(false);
      setShowRenderMessA(false);
      setShowRenderMessB(false);
      setShowRenderMessC(false);
    }, 1000);
  };

  const handelClickCountA = () => {
    setShowRenderMessA(true);
    setShowRenderMessB(true);
    setShowRenderMessC(true);
    setTimeout(() => {
      setShowRenderMessA(false);
      setShowRenderMessB(false);
      setShowRenderMessC(false);
    }, 1000);
  };

  const handelClickCountB = () => {
    setShowRenderMessB(true);
    setShowRenderMessC(true);
    setTimeout(() => {
      setShowRenderMessB(false);
      setShowRenderMessC(false);
    }, 1000);
  };

  const handelClickCountC = () => {
    setShowRenderMessC(true);
    setTimeout(() => {
      setShowRenderMessC(false);
    }, 1000);
  };
  return (
    <section className={style.track}>
      <Container>
        <p className={style.state__description}>
          When the state of C changes, only C renders. But when the state of B
          changes, both B and C render. The B renders because its state updates,
          and C renders because its parent renders. When the state of A changes,
          A renders because of the state update, B renders because A rendered,
          and C renders because B rendered.
        </p>
        <MainField className={style.main__box}>
          <div className={style.inner__box}>
            <div className={style.mess__box}>
              <AnimatePresence>
                {showRenderMess && (
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
            </div>
            <span className={style.app}>App</span>
            <Button text="update state" onClick={handelClickCount} />
            <div className={style.component__a}>
              <div className={style.mess__box}>
                <AnimatePresence>
                  {showRenderMessA && (
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
              </div>
              <span className={style.component__title}>Component A</span>
              <Button text="update state" onClick={handelClickCountA} />
              <div className={style.component__b}>
                <div className={style.mess__box}>
                  <AnimatePresence>
                    {showRenderMessB && (
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
                </div>
                <span className={style.component__title}>Component B</span>
                <Button text="update state" onClick={handelClickCountB} />
                <div className={style.component__c}>
                  <div className={style.mess__box}>
                    <AnimatePresence>
                      {showRenderMessC && (
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
                  </div>
                  <span className={style.component__title}>Component C</span>
                  <Button text="update state" onClick={handelClickCountC} />
                </div>
              </div>
            </div>
          </div>
        </MainField>
      </Container>
    </section>
  );
}

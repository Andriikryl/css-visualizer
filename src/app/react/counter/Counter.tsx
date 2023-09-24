"use client";
import React, { useState } from "react";
import { Container } from "@/components/container/Container";
import { MainField } from "@/components/mainField/MainField";
import { AnimatePresence, motion } from "framer-motion";
import style from "./style.module.css";
import Button from "@/components/button/Button";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [showRenderMess, setShowRenderMess] = useState(false);
  const handelClickCount = () => {
    setCount((prevCount) => prevCount + 1);
    setShowRenderMess(true); // Show the render message
    setTimeout(() => {
      setShowRenderMess(false); // Hide the render message after 1 second
    }, 1000);
  };
  return (
    <section className={style.rerender}>
      <Container>
        <h4 className={style.rerender__title}>Count rerender</h4>
        <p className={style.state__description}>
          The structure of the app is: App &gt; A &gt; B &gt; C
        </p>
        <MainField className={style.main__box}>
          <div className={style.inner__box}>
            <span className={style.app}>App</span>
            <div className={style.state__box}>
              <span className={style.state}>state</span>
              <span className={style.count}>count: {count}</span>
            </div>
            <Button text="update count" onClick={handelClickCount} />
            <div className={style.component__a}>
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
              <span className={style.component__title}>Component A</span>
              <div className={style.component__b}>
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
                <span className={style.component__title}>Component B</span>
                <div className={style.component__c}>
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
                  <span className={style.component__title}>Component C</span>
                </div>
              </div>
            </div>
          </div>
        </MainField>
      </Container>
    </section>
  );
}

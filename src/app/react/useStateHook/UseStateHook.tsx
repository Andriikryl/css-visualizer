"use client";
import React, { useState } from "react";
import { Container } from "@/components/container/Container";
import style from "./style.module.css";
import { MainField } from "@/components/mainField/MainField";
import { AnimatePresence, motion } from "framer-motion";
export default function UseStateHook() {
  const [activeTab, setActiveTab] = useState("state");

  const handleTabClick = (tab: React.SetStateAction<string>) => {
    setActiveTab(tab);
  };
  return (
    <section className={style.state__section}>
      <Container>
        <h3 className={style.state__title}>useState</h3>
        <MainField className={style.state__box}>
          <pre className={style.code__box}>
            <code className={style.code}>
              <span className={style.variabel}>const</span> [
              <span
                onClick={() => handleTabClick("state")}
                className={style.state}
              >
                state
              </span>
              ,{" "}
              <span
                onClick={() => handleTabClick("setState")}
                className={style.state}
              >
                setState
              </span>
              ] = useState(
              <span
                onClick={() => handleTabClick("initialState")}
                className={style.state}
              >
                initialState
              </span>{" "}
              or{" "}
              <span
                onClick={() => handleTabClick("initialStateFunc")}
                className={style.state}
              >
                ()=&gt; initialState
              </span>{" "}
              )
            </code>
          </pre>
          <div className={style.description__block}>
            <AnimatePresence>
              {activeTab === "state" && (
                <motion.p
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  Returns: state, any{" "}
                  <span className={style.state__description}>
                    The current state
                  </span>
                </motion.p>
              )}
              {activeTab === "setState" && (
                <motion.div
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <span>Returns: setState function</span>
                  <p>
                    The set function that lets you update the state to a
                    different value and trigger a re-render.
                  </p>
                  <pre>
                    <code>
                      setState(newState or (pendingState) =&gt; newState)
                    </code>
                  </pre>
                </motion.div>
              )}
              {activeTab === "initialState" && (
                <motion.div
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <span>Parameter: initialState any</span>
                  <p>
                    The value you want the state to be initially. It can be a
                    value of any type, but there is a special behavior for
                    functions. This argument is ignored after the initial
                    render.
                  </p>
                </motion.div>
              )}
              {activeTab === "initialStateFunc" && (
                <motion.div
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <span>Parameter: stateInitializer function pure</span>
                  <p>
                    If you pass a function as initialState, it will be treated
                    as an initializer function. It should be pure, should take
                    no arguments, and should return a value of any type. React
                    will call your initializer function when initializing the
                    component, and store its return value as the initial state.
                  </p>
                  <pre>
                    <code>const initialState = stateInitializer()</code>
                  </pre>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </MainField>
        <p className={style.state__description}>
          So, you call useState with the initial state value, and it returns an
          array with the value of that state and a mechanism for updating it
          (which is called the state dispatch function). When you call the state
          dispatch function, you pass the new value for the state and that
          triggers a re-render of the component which leads to useState getting
          called again to retrieve the new state value and the dispatch function
          again.
        </p>
      </Container>
    </section>
  );
}

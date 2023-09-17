"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Button from "@/components/button/Button";
import style from "./style.module.css";
import { MainField } from "@/components/mainField/MainField";

export default function Pitfall() {
  const [animationResolve, setAnimationresolve] = useState(false);

  const startAnimationResolve = () => {
    setAnimationresolve(true);
  };
  const startAnimationOff = () => {
    setAnimationresolve(false);
  };

  const animationStyles = animationResolve
    ? {
        y: -170,
        borderRadius: "50%",
        backgroundColor: "#06d6a0",
      }
    : {};
  const animationStylesBorder = animationResolve
    ? {
        y: [40, 80, 120, 160, 200, 236],
      }
    : {};
  return (
    <div>
      <MainField className={style.flex__size}>
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
                delay: 1,
              }}
            ></motion.div>
          </div>
          <div className={style.regect}></div>
        </div>
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
                delay: 2,
              }}
            ></motion.div>
          </div>
          <div className={style.regect}></div>
        </div>
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
                delay: 3,
              }}
            ></motion.div>
          </div>
          <div className={style.regect}></div>
        </div>
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
                delay: 4,
              }}
            ></motion.div>
          </div>
          <div className={style.regect}></div>
        </div>
        <div className={style.code__box}>
          <pre>
            <code className={style.code}>
              <span className={style.part__code}>
                <motion.div
                  className={style.motion__code}
                  layout
                  initial={{ y: 0 }}
                  animate={animationStylesBorder}
                  transition={{
                    y: { duration: 4.8 },
                    delay: 1,
                  }}
                ></motion.div>
                async function fetchData(){" "}
                <span className={style.parenthesis}>&#123;</span>{" "}
              </span>{" "}
              <span className={style.part__code}>
                const vessels ={" "}
                <span className={style.center__code}>
                  await fatch(api/vessels);
                </span>{" "}
              </span>{" "}
              <span className={style.part__code}>
                const tab ={" "}
                <motion.span className={style.center__code}>
                  await fatch(api/vessels);
                </motion.span>
                ;
              </span>{" "}
              <span className={style.part__code}>
                const tv ={" "}
                <motion.span className={style.center__code}>
                  await fatch(api/vessels);
                </motion.span>
                ;{" "}
              </span>{" "}
              <span className={style.part__code}>
                const nickmames ={" "}
                <motion.span className={style.center__code}>
                  await fatch(api/vessels);
                </motion.span>
                ;
              </span>{" "}
              <span className={style.part__code}>
                const notpad ={" "}
                <motion.span className={style.center__code}>
                  await fatch(api/vessels);
                </motion.span>
                ;
              </span>{" "}
              <span className={style.part__code}>
                return
                <motion.span className={style.center__code}>
                  <span className={style.parenthesis}>&#123;</span> vessels,
                  tab, nickname, tv, notpad
                  <span className={style.parenthesis}>&#125;</span>
                </motion.span>
                ;
              </span>{" "}
              <span className={style.parenthesis}>&#125;</span>
            </code>
          </pre>
        </div>
      </MainField>
      <div className={style.button__group}>
        <Button text={"Fulfilled"} onClick={startAnimationResolve} />
        <Button text={"Reset"} onClick={startAnimationOff} />
      </div>
    </div>
  );
}

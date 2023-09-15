"use client";
import React, { useRef, useState } from "react";
import { Container } from "@/components/container/Container";
import { motion } from "framer-motion";
import style from "./style.module.css";

export default function Perspective() {
  const [perspectiveValue, setPerspectiveValue] = useState<number | null>(null);
  const perspectiveRef = useRef<HTMLDivElement | null>(null);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const inputElement = document.getElementById("num") as HTMLInputElement;
    const inputValue = parseInt(inputElement?.value || "");
    if (perspectiveRef.current) {
      perspectiveRef.current.style.perspective = `${inputValue}px`;
      setPerspectiveValue(inputValue);
    }
  };
  return (
    <section className={style.perspective}>
      <Container>
        <h2 className={style.perspective__title}>Perspective</h2>
        <div className={style.flex__group}>
          <motion.div
            className={style.perent}
            ref={perspectiveRef}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ delay: 0.2, duration: 0.9 }}
          >
            <motion.div className={style.one}>
              <motion.div className={style.two}>
                <motion.div className={style.three}>
                  <motion.div className={style.four}>
                    <motion.div className={style.five}>
                      <motion.div className={style.six}>
                        <motion.div className={style.seven}></motion.div>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
          <div>
            <form className={style.form} onSubmit={handleSubmit}>
              <label className={style.label} htmlFor="num">
                type number of perspective
              </label>
              <input type="number" className={style.input} id="num" />
              <button className={style.input__button} type="submit">
                Add Amount
              </button>
            </form>
            <div className={style.code__box}>
              <pre>
                <code>
                  <span className={style.part__code}>
                    .container <span className={style.parenthesis}>&#123;</span>{" "}
                  </span>{" "}
                  <span className={style.part__code}>
                    border:{" "}
                    <span className={style.center__code}>1px solid white;</span>{" "}
                  </span>{" "}
                  <span className={style.part__code}>
                    transform-style:{" "}
                    <motion.span className={style.center__code}>
                      preserve-3d;
                    </motion.span>
                    ;{" "}
                  </span>{" "}
                  <span className={style.part__code}>
                    perspective-origin:{" "}
                    <motion.span className={style.center__code}>
                      50% 50%;
                    </motion.span>
                    ;{" "}
                  </span>{" "}
                  <span className={style.part__code}>
                    perspective:{" "}
                    <motion.span className={style.center__code}>
                      {perspectiveValue}px
                    </motion.span>
                    ;
                  </span>{" "}
                  <span className={style.parenthesis}>&#125;</span>
                </code>
              </pre>
            </div>
          </div>
        </div>
        <p className={style.description}>
          The perspective property can enables a 3D-space for you child
          elements. Its value determines the strength of a childes z-transform
          effect. Large perspective values cause small transformations, small
          values cause large transformations.
        </p>
      </Container>
    </section>
  );
}

"use client";
import React from "react";
import { Container } from "../container/Container";
import { useState } from "react";
import { motion } from "framer-motion";
import style from "./style.module.css";
import clsx from "clsx";

export default function HtmlMap() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenu, setIsMenu] = useState(false);
  const handleInnerClick = (event: { stopPropagation: () => void }) => {
    event.stopPropagation();
    setIsMenu(!isMenu);
  };
  return (
    <section className={style.html}>
      <Container>
        <h4 className={style.html__title}>Html</h4>
        <div className={style.main__box}>
          <motion.div
            layout
            data-isOpen={isOpen}
            initial={{ borderRadius: "50%" }}
            className={style.head}
            onClick={() => setIsOpen(!isOpen)}
          >
            <div
              className={clsx(style.resource, style.head__inner, {
                [style.show__inner]: isOpen,
              })}
            >
              resource
            </div>
            <motion.div
              className={clsx(style.meta, style.head__inner, {
                [style.show__inner]: isOpen,
              })}
              layout
              data-isOpen={isMenu}
              animate={{ y: isMenu ? -100 : 0 }}
              initial={{ borderRadius: "50%" }}
              onClick={handleInnerClick}
            >
              meta
              <div className={clsx(style.meta__inner)}>draggable</div>
              <div className={clsx(style.meta__inner)}>nonce</div>
              <div className={clsx(style.meta__inner)}>inputmode</div>
              <div className={clsx(style.meta__inner)}>contenteditable</div>
              <div className={clsx(style.meta__inner)}>exportparts</div>
              <div className={clsx(style.meta__inner)}>slot</div>
              <div className={clsx(style.meta__inner)}>itemid</div>
              <div className={clsx(style.meta__inner)}>dir</div>
              <div className={clsx(style.meta__inner)}>lang</div>
              <div className={clsx(style.meta__inner)}>id</div>
              <div className={clsx(style.meta__inner)}>tabindex</div>
              <div className={clsx(style.meta__inner)}>class</div>
              <div className={clsx(style.meta__inner)}>itemref</div>
              <div className={clsx(style.meta__inner)}>enterkeyhint</div>
              <div className={clsx(style.meta__inner)}>accesskey</div>
              <div className={clsx(style.meta__inner)}>data</div>
            </motion.div>
            <div
              className={clsx(style.title, style.head__inner, {
                [style.show__inner]: isOpen,
              })}
            >
              title
            </div>
            <div
              className={clsx(style.style, style.head__inner, {
                [style.show__inner]: isOpen,
              })}
            >
              style
            </div>
            <div
              className={clsx(style.base, style.head__inner, {
                [style.show__inner]: isOpen,
              })}
            >
              base
            </div>
            <div
              className={clsx(style.script, style.head__inner, {
                [style.show__inner]: isOpen,
              })}
            >
              script
            </div>
            <div
              className={clsx(style.noscript__head, style.head__inner, {
                [style.show__inner]: isOpen,
              })}
            >
              noscript(hade)
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

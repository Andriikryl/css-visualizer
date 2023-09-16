"use client";
import React, { useState } from "react";
import { Container } from "@/components/container/Container";
import style from "./style.module.css";
import Button from "@/components/button/Button";
import { AnimatePresence, motion } from "framer-motion";

const dataArray = [
  {
    id: 1,
    title: "1",
  },
  {
    id: 2,
    title: "2",
  },
  {
    id: 3,
    title: "3",
  },
  {
    id: 4,
    title: "4",
  },
  {
    id: 5,
    title: "5",
  },
  {
    id: 6,
    title: "6",
  },
  {
    id: 7,
    title: "7",
  },
];

export default function Arrays() {
  const [data, setData] = useState(dataArray);

  const handlePopClick = () => {
    if (data.length > 0) {
      const newData = data.slice(0, data.length - 1);
      setData(newData);
    }
  };
  const handleShiftClick = () => {
    if (data.length > 0) {
      const newData = data.slice(1);
      setData(newData);
    }
  };

  return (
    <section className={style.arrays__section}>
      <Container>
        <h2 className={style.array__title}>Arrays</h2>
        <div className={style.control__group}>
          <Button text="pop" onClick={handlePopClick}></Button>
          <Button text="shift" onClick={handleShiftClick}></Button>
        </div>
        <AnimatePresence>
          <motion.div className={style.flex__group} layout>
            {data.map((item) => {
              return (
                <motion.div
                  className={style.item}
                  key={item.id}
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    opacity: { duration: 0.6 },
                    y: { duration: 1.2 },
                  }}
                >
                  <span className={style.item__title}>{item.title}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
        <ul className={style.description__list}>
          <li className={style.list__item}>
            <span className={style.item__code}>arr.pop()</span> – extracts an
            item from the end,
          </li>
          <li className={style.list__item}>
            <span className={style.item__code}>arr.shift()</span> – extracts an
            item from the beginning,
          </li>
        </ul>
      </Container>
    </section>
  );
}

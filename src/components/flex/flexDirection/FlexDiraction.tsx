"use client";
import React, { useState } from "react";
import style from "./style.module.css";
import clsx from "clsx";
import { motion } from "framer-motion";
import Button from "@/components/button/Button";
import BlockDescription from "@/components/blockDescription/BlockDescription";
import InnerBox from "@/components/innerBox/InnerBox";
import TaskDescription from "@/components/taskDescription/TaskDescription";

export default function FlexDiraction() {
  const [end, setEnd] = useState(false);
  const [center, setCenter] = useState(false);
  const [start, setStart] = useState(false);
  const [rowRevers, setRowRevers] = useState(false);
  const handleClickColumn = () => {
    setStart(true);
    setEnd(false);
    setCenter(false);
    setRowRevers(false);
  };
  const handleClickRow = () => {
    setEnd(true);
    setStart(false);
    setCenter(false);
    setRowRevers(false);
  };
  const handleClickColumnReverse = () => {
    setCenter(true);
    setEnd(false);
    setStart(false);
    setRowRevers(false);
  };
  const handleClickRowReverse = () => {
    setRowRevers(true);
    setCenter(false);
    setEnd(false);
    setStart(false);
  };
  let justifyContentValue = "_____   ";

  if (start) {
    justifyContentValue = "column";
  } else if (center) {
    justifyContentValue = "column-reverse";
  } else if (end) {
    justifyContentValue = "row";
  } else if (rowRevers) {
    justifyContentValue = "row-revers";
  }

  return (
    <div>
      <TaskDescription
        qustion={" flex-direction"}
        answer={justifyContentValue}
      />
      <div className={style.flex__group}>
        <Button text={"Column"} onClick={handleClickColumn} />
        <Button text={"Column-reverse"} onClick={handleClickColumnReverse} />
        <Button text={"Row"} onClick={handleClickRow} />
        <Button text={"Row-reverse"} onClick={handleClickRowReverse} />
      </div>
      <motion.div
        className={clsx(style.box, {
          [style.centered]: center,
          [style.ended]: end,
          [style.started]: start,
          [style.rowRevers]: rowRevers,
        })}
      >
        <InnerBox />
        <InnerBox />
        <InnerBox />
        <InnerBox />
        <InnerBox />
      </motion.div>
      <BlockDescription text="flex container" />
    </div>
  );
}

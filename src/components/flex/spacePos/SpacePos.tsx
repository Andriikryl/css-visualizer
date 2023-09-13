"use client";
import React, { useState } from "react";
import style from "./style.module.css";
import clsx from "clsx";
import { motion } from "framer-motion";
import Button from "@/components/button/Button";
import BlockDescription from "@/components/blockDescription/BlockDescription";
import InnerBox from "@/components/innerBox/InnerBox";
import TaskDescription from "@/components/taskDescription/TaskDescription";

export default function SpacePos() {
  const [end, setEnd] = useState(false);
  const [center, setCenter] = useState(false);
  const [start, setStart] = useState(false);
  const handleClickAround = () => {
    setStart(true);
    setEnd(false);
    setCenter(false);
  };
  const handleClickCenter = () => {
    setEnd(true);
    setStart(false);
    setCenter(false);
  };
  const handleClickBetwen = () => {
    setCenter(true);
    setEnd(false);
    setStart(false);
  };

  let justifyContentValue = "_____   ";

  if (start) {
    justifyContentValue = "space-around";
  } else if (center) {
    justifyContentValue = "space-between";
  } else if (end) {
    justifyContentValue = "center";
  }

  return (
    <div>
      <TaskDescription
        qustion={"justify-content"}
        answer={justifyContentValue}
      />
      <div className={style.flex__group}>
        <Button text={"space-around"} onClick={handleClickAround} />
        <Button text={"space-between"} onClick={handleClickBetwen} />
        <Button text={"center"} onClick={handleClickCenter} />
      </div>
      <motion.div
        className={clsx(style.box, {
          [style.centered]: center,
          [style.ended]: end,
          [style.started]: start,
        })}
      >
        <InnerBox />
        <InnerBox />
        <InnerBox />
      </motion.div>
      <BlockDescription text="flex container" />
    </div>
  );
}

"use client";
import React from "react";
import { MainField } from "@/components/mainField/MainField";
import { useState } from "react";
import { motion } from "framer-motion";
import style from "./style.module.css";
import { InputFrame } from "../../inputFrame/InputFrame";
import Button from "@/components/button/Button";

export default function Starter() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [rotate, setRotate] = useState(0);
  const resetValues = () => {
    setX(0);
    setY(0);
    setRotate(0);
  };

  return (
    <div className={style.starter}>
      <Button text="Refresh" onClick={resetValues} />
      <MainField className={style.main__box}>
        <motion.div
          className={style.inner__box}
          animate={{ x, y, rotate }}
          transition={{ type: "spring" }}
        />
      </MainField>
      <div className={style.input__group}>
        <InputFrame value={x} set={setX}>
          x
        </InputFrame>
        <InputFrame value={y} set={setY}>
          y
        </InputFrame>
        <InputFrame value={rotate} set={setRotate} min={-180} max={180}>
          rotate
        </InputFrame>
      </div>
    </div>
  );
}

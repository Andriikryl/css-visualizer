"use client";
import React, { useState } from "react";
import style from "./style.module.css";
import { MainField } from "@/components/mainField/MainField";
import { motion } from "framer-motion";
import BlockDescription from "@/components/blockDescription/BlockDescription";
import Button from "@/components/button/Button";
export default function Grow() {
  const initialFlexGrowValues = [1, 1, 1, 1, 1];
  const [flexGrowValues, setFlexGrowValues] = useState(initialFlexGrowValues);

  const handleBoxClick = (index: number) => {
    const newFlexGrowValues = [...flexGrowValues];
    newFlexGrowValues[index] += 1;
    setFlexGrowValues(newFlexGrowValues);
  };
  const handleResetClick = () => {
    setFlexGrowValues(initialFlexGrowValues);
  };
  return (
    <div>
      <h3 className={style.grow__title}>Grow</h3>
      <p className={style.grow__description}>increse flex-grow for inner box</p>
      <Button text="reset" onClick={handleResetClick}  className={style.button}/>
      <MainField className={style.box}>
        {flexGrowValues.map((flexGrow, index) => (
          <motion.div
            key={index}
            className={style.inner__box}
            style={{ flexGrow: flexGrow }}
            onClick={() => handleBoxClick(index)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <span className={style.value}> flex-grow:{flexGrow}</span>
          </motion.div>
        ))}
      </MainField>
      <BlockDescription text="flex container" />
    </div>
  );
}

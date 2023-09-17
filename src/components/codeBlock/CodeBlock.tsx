import React from "react";
import style from "./style.module.css";
import { motion } from "framer-motion";

interface CodeBlock {
  classN: string;
  propertyOne: string;
  valueOne: string;
  propertyTwo?: string;
  valueTwo?: string;
  propertyThree?: string;
  propertyFour?: string;
  propertyFive?: string;
  valueThree?: string;
  valueFour?: string;
  valueFive?: string;
}

export default function CodeBlock({
  classN,
  propertyOne,
  valueOne,
  propertyTwo,
  valueTwo,
  propertyThree,
  propertyFour,
  propertyFive,
  valueThree,
  valueFour,
  valueFive,
}: CodeBlock) {
  return (
    <div className={style.code__box}>
      <pre>
        <code className={style.code}>
          <span className={style.part__code}>
            {classN} <span className={style.parenthesis}>&#123;</span>{" "}
          </span>{" "}
          <span className={style.part__code}>
            {propertyOne}:{" "}
            <span className={style.center__code}>{valueOne}</span>{" "}
          </span>{" "}
          {propertyTwo && valueTwo && (
            <span className={style.part__code}>
              {propertyTwo}:{" "}
              <motion.span className={style.center__code}>
                {valueTwo}
              </motion.span>
              ;{" "}
            </span>
          )}
          {propertyThree && propertyThree && (
            <span className={style.part__code}>
              {propertyThree}:{" "}
              <motion.span className={style.center__code}>
                {valueThree}
              </motion.span>
              ;
            </span>
          )}
          {propertyFour && valueFour && (
            <span className={style.part__code}>
              {propertyFour}:{" "}
              <motion.span className={style.center__code}>
                {valueFour}
              </motion.span>
              ;
            </span>
          )}
          {propertyFive && valueFive && (
            <span className={style.part__code}>
              {propertyFive}:{" "}
              <motion.span className={style.center__code}>
                {valueFive}
              </motion.span>
              ;
            </span>
          )}
          <span className={style.parenthesis}>&#125;</span>
        </code>
      </pre>
    </div>
  );
}

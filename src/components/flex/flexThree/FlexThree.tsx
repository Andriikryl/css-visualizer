"use client";
import React, { useState } from "react";
import style from "./style.module.css";
import clsx from "clsx";
import { motion } from "framer-motion";
import Button from "@/components/button/Button";
import BlockDescription from "@/components/blockDescription/BlockDescription";
import InnerBox from "@/components/innerBox/InnerBox";

export default function FlexThree() {
  const [isRowActive, setIsRowActive] = useState(false);
  const [isColumnActive, setIsColumnActive] = useState(false);
  const [column, setColumn] = useState(false);
  const [row, setRow] = useState(false);
  const [isjustyCenterActive, setIsjustyCenterActive] = useState(false);
  const [isjustyStartActive, setIsjustyStartActive] = useState(false);
  const [isjustyEndActive, setIsjustyEndActive] = useState(false);
  const [isjustySpaceBetActive, setIsjustySpaceBetActive] = useState(false);
  const [isjustySpaceArrActive, setIsjustySpaceArrActive] = useState(false);
  const [isjustySpaceEvenActive, setIsjustySpaceEvenActive] = useState(false);
  const [justyCenter, setjustyCenter] = useState(false);
  const [justyStart, setjustyStart] = useState(false);
  const [justyEnd, setjustyEnd] = useState(false);
  const [justySpaceBet, setjustySpaceBet] = useState(false);
  const [justySpaceArr, setjustyjustySpaceArr] = useState(false);
  const [justySpaceEven, setjustySpaceEven] = useState(false);
  const [alieCenterActive, setalieCenterActive] = useState(false);
  const [alieStartActive, setalieStartActive] = useState(false);
  const [alieEndActive, setalieEndActive] = useState(false);
  const [alieBesLineActive, setalieBesLineActive] = useState(false);
  const [alieCenter, setalieCenter] = useState(false);
  const [alieStart, setalieStart] = useState(false);
  const [alieEnd, setalieEnd] = useState(false);
  const [alieBesLine, setalieBesLine] = useState(false);

  let justifyContentValue = "______";
  let aliitemsCenterValue = "______";
  let flexDirectionValue = "______";

  if (justyCenter) {
    justifyContentValue = "center";
  }
  if (justyStart) {
    justifyContentValue = "start";
  }
  if (justyEnd) {
    justifyContentValue = "end";
  }
  if (justySpaceBet) {
    justifyContentValue = "space-between";
  }
  if (justySpaceArr) {
    justifyContentValue = "space-arround";
  }
  if (justySpaceEven) {
    justifyContentValue = "space-evenly";
  }
  if (alieCenter) {
    aliitemsCenterValue = "center";
  }
  if (alieStart) {
    aliitemsCenterValue = "start";
  }
  if (alieEnd) {
    aliitemsCenterValue = "end";
  }
  if (alieBesLine) {
    aliitemsCenterValue = "baseline";
  }
  if (row) {
    flexDirectionValue = "row";
  }
  if (column) {
    flexDirectionValue = "column";
  }

  const handleClickColumn = () => {
    setColumn(true);
    setRow(false);
    setIsRowActive(false);
    setIsColumnActive(true);
  };
  const handleClickRow = () => {
    setRow(true);
    setColumn(false);
    setIsRowActive(true);
    setIsColumnActive(false);
  };
  const handelClickjustyCenter = () => {
    setjustyCenter(true);
    setIsjustyCenterActive(true);
    setjustyStart(false);
    setjustyEnd(false);
    setjustySpaceBet(false);
    setjustyjustySpaceArr(false);
    setjustySpaceEven(false);
    setIsjustyStartActive(false);
    setIsjustyEndActive(false);
    setIsjustySpaceBetActive(false);
    setIsjustySpaceArrActive(false);
    setIsjustySpaceEvenActive(false);
  };
  const handelClickjustyStart = () => {
    setjustyStart(true);
    setIsjustyStartActive(true);
    setjustyCenter(false);
    setjustyEnd(false);
    setjustySpaceBet(false);
    setjustyjustySpaceArr(false);
    setjustySpaceEven(false);
    setIsjustyCenterActive(false);
    setIsjustyEndActive(false);
    setIsjustySpaceArrActive(false);
    setIsjustySpaceBetActive(false);
    setIsjustySpaceEvenActive(false);
  };
  const handelClickjustyEnd = () => {
    setjustyEnd(true);
    setIsjustyEndActive(true);
    setjustyStart(false);
    setjustyCenter(false);
    setjustySpaceBet(false);
    setjustyjustySpaceArr(false);
    setjustySpaceEven(false);
    setIsjustyCenterActive(false);
    setIsjustyStartActive(false);
    setIsjustySpaceBetActive(false);
    setIsjustySpaceArrActive(false);
    setIsjustySpaceEvenActive(false);
  };
  const handelClickjustySpaceBet = () => {
    setjustySpaceBet(true);
    setIsjustySpaceBetActive(true);
    setjustyEnd(false);
    setjustyStart(false);
    setjustyCenter(false);
    setjustyjustySpaceArr(false);
    setjustySpaceEven(false);
    setIsjustyCenterActive(false);
    setIsjustyStartActive(false);
    setIsjustyEndActive(false);
    setIsjustySpaceArrActive(false);
    setIsjustySpaceEvenActive(false);
  };
  const handelClickjustySpaceArr = () => {
    setjustyjustySpaceArr(true);
    setIsjustySpaceArrActive(true);
    setjustySpaceBet(false);
    setjustyEnd(false);
    setjustyStart(false);
    setjustyCenter(false);
    setjustySpaceEven(false);
    setIsjustyCenterActive(false);
    setIsjustyStartActive(false);
    setIsjustyEndActive(false);
    setIsjustySpaceBetActive(false);
    setIsjustySpaceEvenActive(false);
  };
  const handelClickjustySpaceEven = () => {
    setjustySpaceEven(true);
    setIsjustySpaceEvenActive(true);
    setjustyjustySpaceArr(false);
    setjustySpaceBet(false);
    setjustyEnd(false);
    setjustyStart(false);
    setjustyCenter(false);
    setIsjustyCenterActive(false);
    setIsjustyStartActive(false);
    setIsjustyEndActive(false);
    setIsjustySpaceBetActive(false);
    setIsjustySpaceArrActive(false);
  };
  const handleClickalieCenter = () => {
    setalieCenterActive(true);
    setalieCenter(true);
    setalieStart(false);
    setalieEnd(false);
    setalieBesLine(false);
    setalieStartActive(false);
    setalieEndActive(false);
    setalieBesLineActive(false);
  };
  const handleClickalieStart = () => {
    setalieStart(true);
    setalieStartActive(true);
    setalieCenter(false);
    setalieEnd(false);
    setalieBesLine(false);
    setalieCenterActive(false);
    setalieEndActive(false);
    setalieBesLineActive(false);
  };
  const handleClickalieEnd = () => {
    setalieEnd(true);
    setalieEndActive(true);
    setalieStart(false);
    setalieCenter(false);
    setalieBesLine(false);
    setalieCenterActive(false);
    setalieStartActive(false);
    setalieBesLineActive(false);
  };
  const handleClickalieBesLine = () => {
    setalieBesLine(true);
    setalieBesLineActive(true);
    setalieEnd(false);
    setalieStart(false);
    setalieCenter(false);
    setalieCenterActive(false);
    setalieStartActive(false);
    setalieEndActive(false);
  };

  return (
    <div>
      <div className={style.flex__group}>
        <div className={style.button__box}>
          <div className={style.button__group}>
            <span className={style.btn__title}>flex-direction:</span>
            <Button
              text={"Row"}
              onClick={handleClickRow}
              className={isRowActive ? style.activeButton : ""}
            />
            <Button
              text={"Column"}
              onClick={handleClickColumn}
              className={isColumnActive ? style.activeButton : ""}
            />
          </div>
          <div className={style.button__group}>
            <span className={style.btn__title}>justify-content:</span>
            <Button
              text={"center"}
              onClick={handelClickjustyCenter}
              className={isjustyCenterActive ? style.activeButton : ""}
            />
            <Button
              text={"start"}
              onClick={handelClickjustyStart}
              className={isjustyStartActive ? style.activeButton : ""}
            />
            <Button
              text={"end"}
              onClick={handelClickjustyEnd}
              className={isjustyEndActive ? style.activeButton : ""}
            />
            <Button
              text={"space-betwen"}
              onClick={handelClickjustySpaceBet}
              className={isjustySpaceBetActive ? style.activeButton : ""}
            />
            <Button
              text={"space-arround"}
              onClick={handelClickjustySpaceArr}
              className={isjustySpaceArrActive ? style.activeButton : ""}
            />
            <Button
              text={"space-evenly"}
              onClick={handelClickjustySpaceEven}
              className={isjustySpaceEvenActive ? style.activeButton : ""}
            />
          </div>
          <div className={style.button__group}>
            <span className={style.btn__title}>align-items:</span>
            <Button
              text={"center"}
              onClick={handleClickalieCenter}
              className={alieCenterActive ? style.activeButton : ""}
            />
            <Button
              text={"start"}
              onClick={handleClickalieStart}
              className={alieStartActive ? style.activeButton : ""}
            />
            <Button
              text={"end"}
              onClick={handleClickalieEnd}
              className={alieEndActive ? style.activeButton : ""}
            />
            <Button
              text={"baseline"}
              onClick={handleClickalieBesLine}
              className={alieBesLineActive ? style.activeButton : ""}
            />
          </div>
        </div>
        <div className={style.code__box}>
          <pre>
            <code>
              <span className={style.part__code}>
                .container <span className={style.parenthesis}>&#123;</span>{" "}
              </span>{" "}
              <span className={style.part__code}>
                display: <span className={style.center__code}>flex</span>{" "}
              </span>{" "}
              <span className={style.part__code}>
                flex-direction:{" "}
                <motion.span className={style.center__code}>
                  {flexDirectionValue}
                </motion.span>
                ;
              </span>{" "}
              <span className={style.part__code}>
                justify-content:{" "}
                <motion.span className={style.center__code}>
                  {justifyContentValue}
                </motion.span>
                ;{" "}
              </span>{" "}
              <span className={style.part__code}>
                align-items:{" "}
                <motion.span className={style.center__code}>
                  {aliitemsCenterValue}
                </motion.span>
                ;
              </span>{" "}
              <span className={style.parenthesis}>&#125;</span>
            </code>
          </pre>
        </div>
      </div>
      <motion.div
        className={clsx(style.box, {
          [style.row]: row,
          [style.column]: column,
          [style.justyCenter]: justyCenter,
          [style.justyStart]: justyStart,
          [style.justyEnd]: justyEnd,
          [style.justySpaceBet]: justySpaceBet,
          [style.justySpaceArr]: justySpaceArr,
          [style.justySpaceEven]: justySpaceEven,
          [style.alieCenter]: alieCenter,
          [style.alieStart]: alieStart,
          [style.alieEnd]: alieEnd,
          [style.alieBesLine]: alieBesLine,
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

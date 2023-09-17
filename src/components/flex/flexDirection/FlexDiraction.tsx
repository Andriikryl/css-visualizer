"use client";
import React, { useReducer } from "react";
import style from "./style.module.css";
import clsx from "clsx";
import { motion } from "framer-motion";
import Button from "@/components/button/Button";
import BlockDescription from "@/components/blockDescription/BlockDescription";
import InnerBox from "@/components/innerBox/InnerBox";
import TaskDescription from "@/components/taskDescription/TaskDescription";
import { MainField } from "@/components/mainField/MainField";

interface State {
  start: boolean;
  center: boolean;
  end: boolean;
  rowRevers: boolean;
}

type Action =
  | { type: "SET_START" }
  | { type: "SET_CENTER" }
  | { type: "SET_END" }
  | { type: "SET_ROW_REVERS" };

const initialState = {
  start: false,
  center: false,
  end: false,
  rowRevers: false,
};

const actionTypes = {
  SET_START: "SET_START",
  SET_CENTER: "SET_CENTER",
  SET_END: "SET_END",
  SET_ROW_REVERS: "SET_ROW_REVERS",
};

function reducer(state: any, action: { type: any }) {
  switch (action.type) {
    case actionTypes.SET_START:
      return {
        start: true,
        center: false,
        end: false,
        rowRevers: false,
      };
    case actionTypes.SET_CENTER:
      return {
        start: false,
        center: true,
        end: false,
        rowRevers: false,
      };
    case actionTypes.SET_END:
      return {
        start: false,
        center: false,
        end: true,
        rowRevers: false,
      };
    case actionTypes.SET_ROW_REVERS:
      return {
        start: false,
        center: false,
        end: false,
        rowRevers: true,
      };
    default:
      return state;
  }
}

export default function FlexDirection() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleClickColumn = () => {
    dispatch({ type: actionTypes.SET_START });
  };

  const handleClickColumnReverse = () => {
    dispatch({ type: actionTypes.SET_CENTER });
  };

  const handleClickRow = () => {
    dispatch({ type: actionTypes.SET_END });
  };

  const handleClickRowReverse = () => {
    dispatch({ type: actionTypes.SET_ROW_REVERS });
  };

  let justifyContentValue = "_____   ";

  if (state.start) {
    justifyContentValue = "column";
  } else if (state.center) {
    justifyContentValue = "column-reverse";
  } else if (state.end) {
    justifyContentValue = "row";
  } else if (state.rowRevers) {
    justifyContentValue = "row-reverse";
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
      <MainField
        className={clsx(style.box, {
          [style.centered]: state.center,
          [style.ended]: state.end,
          [style.started]: state.start,
          [style.rowRevers]: state.rowRevers,
        }, style.box__counters)}
      >
        <InnerBox />
        <InnerBox />
        <InnerBox />
        <InnerBox />
        <InnerBox />
      </MainField>
      <BlockDescription text="flex container" />
    </div>
  );
}

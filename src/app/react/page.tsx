import React from "react";
import HeroReact from "./heroReact/HeroReact";
import PropDrilling from "./propDrilling/PropDrilling";
import ReactMap from "./ReactMap/ReactMap";
import UseStateHook from "./useStateHook/UseStateHook";
import UseRedurecHook from "./useReducerHook/UseRedurecHook";

export default function ReactPage() {
  return (
    <>
      <HeroReact />
      <ReactMap />
      <UseStateHook />
      <UseRedurecHook />
      <PropDrilling />
    </>
  );
}

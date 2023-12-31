import React from "react";
import HeroReact from "./heroReact/HeroReact";
import PropDrilling from "./propDrilling/PropDrilling";
import ReactMap from "./ReactMap/ReactMap";
import UseStateHook from "./useStateHook/UseStateHook";
import UseRedurecHook from "./useReducerHook/UseRedurecHook";
import UseEffectHook from "./useEffectHook/UseEffectHook";
import Renders from "./renders/Renders";
import Counter from "./counter/Counter";
import Track from "./track/Track";

export default function ReactPage() {
  return (
    <>
      <HeroReact />
      <ReactMap />
      <UseStateHook />
      <UseRedurecHook />
      <UseEffectHook />
      <PropDrilling />
      <Renders />
      <Counter />
      <Track />
    </>
  );
}

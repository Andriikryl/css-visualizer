import React from "react";
import HeroSvg from "./heroSvg/HeroSvg";
import SvgCurve from "./svgCurve/SvgCurve";
import ViewBox from "./viewBox/ViewBox";

export default function Svg() {
  return (
    <>
      <HeroSvg />
      <SvgCurve />
      <ViewBox />
    </>
  );
}

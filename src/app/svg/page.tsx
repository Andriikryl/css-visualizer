import React from "react";
import HeroSvg from "./heroSvg/HeroSvg";
import SvgCurve from "./svgCurve/SvgCurve";
import ViewBox from "./viewBox/ViewBox";
import CircleSvg from "./circleSvg/CircleSvg";
import Line from "./line/Line";

export default function Svg() {
  return (
    <>
      <HeroSvg />
      <SvgCurve />
      <ViewBox />
      <CircleSvg />
      <Line />
    </>
  );
}

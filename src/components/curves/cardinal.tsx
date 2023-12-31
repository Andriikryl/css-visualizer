import * as React from "react";
import { line, curveCardinal } from "d3-shape";
import { Curve, CurveProps } from "../curvData/curve";

type Props = {
  data: [number, number][];
  tension?: number;
} & Omit<CurveProps, "path">;

export default function Cardial({ data, tension = 0, ...props }: Props) {
  const d = line().curve(curveCardinal.tension(tension))(data) || "";
  return <Curve path={d} data={data} {...props} />;
}

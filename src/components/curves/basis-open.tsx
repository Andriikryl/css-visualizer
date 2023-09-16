import * as React from "react";
import { line, curveBasisOpen } from "d3-shape";
import { Curve, CurveProps } from "../curvData/curve";

type Props = {
  data: [number, number][];
} & Omit<CurveProps, "path">;

export default function BasisOpen({ data, ...props }: Props) {
  const d = line().curve(curveBasisOpen)(data) || "";
  return <Curve path={d} data={data} {...props} />;
}

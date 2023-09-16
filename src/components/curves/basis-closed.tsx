import * as React from "react";
import { line, curveBasisClosed } from "d3-shape";
import { Curve, CurveProps } from "../curvData/curve";

type Props = {
  data: [number, number][];
} & Omit<CurveProps, "path">;

export default function BasisClosed({ data, ...props }: Props) {
  const d = line().curve(curveBasisClosed)(data) || "";
  return <Curve path={d} data={data} {...props} />;
}

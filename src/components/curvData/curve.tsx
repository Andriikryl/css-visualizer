import * as React from "react";
import style from "./style.module.css";

export type CurveProps = {
  data: [number, number][];
  path: string;
  showPoints?: boolean;
  pointElement?: PointElement;
} & React.SVGProps<SVGPathElement>;

export function Curve({
  path,
  data,
  pointElement = defaultPointElement,
  showPoints = true,
  ...props
}: CurveProps) {
  return (
    <>
      <path
        className={style.path}
        d={path}
        stroke="black"
        fill="transparent"
        strokeWidth="2"
        {...props}
      />
      {showPoints && data.map(pointElement)}
    </>
  );
}

type PointElement = (
  center: [number, number],
  i: number,
  points: [number, number][]
) => React.ReactNode;

function defaultPointElement(
  center: [number, number],
  i: number
): React.ReactNode {
  return (
    <circle
      cx={center[0]}
      cy={center[1]}
      r="2"
      fill="#e63946"
      stroke="#e63946"
      strokeWidth="2"
      key={i}
    />
  );
}

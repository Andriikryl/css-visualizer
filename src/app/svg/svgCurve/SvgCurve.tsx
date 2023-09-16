"use client";
import React from "react";
import style from "./style.module.css";
import { Container } from "@/components/container/Container";
import BasisClosed from "@/components/curves/basis-closed";
import Line from "@/components/curves/line";
import CurveBox from "./curveBox/CurveBox";
import CurveTitle from "./curveTitle/CurveTitle";
import BasisOpen from "@/components/curves/basis-open";
import Bundel from "@/components/curves/bundle";
import Cardial from "@/components/curves/cardinal";

const data: [number, number][] = [
  [25, 50],
  [50, 75],
  [75, 80],
  [100, 40],
  [125, 30],
  [150, 60],
  [175, 50],
];

export default function SvgCurve() {
  const [catmullRomAlpha, setCatmullRomAlpha] = React.useState(0.5);
  const [bundleBeta, setBundleBeta] = React.useState(0.85);
  const [cardinalTension, setCardinalTension] = React.useState(0);
  return (
    <section className={style.curve__section}>
      <Container>
        <div className={style.curev__group}>
          <CurveBox>
            <CurveTitle text="Basis-closed-curve" />
            <svg
              className={style.svg}
              width="200"
              height="100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <BasisClosed data={data} />
            </svg>
          </CurveBox>
          <CurveBox>
            <CurveTitle text="Line" />
            <svg width="200" height="100" xmlns="http://www.w3.org/2000/svg">
              <Line data={data} />
            </svg>
          </CurveBox>
          <CurveBox>
            <CurveTitle text="basic-open-curve" />
            <svg width="200" height="100" xmlns="http://www.w3.org/2000/svg">
              <BasisOpen data={data} />
            </svg>
          </CurveBox>

          <CurveBox>
            <CurveTitle text="Curve-bundel" />
            <svg width="200" height="100" xmlns="http://www.w3.org/2000/svg">
              <Bundel data={data} beta={bundleBeta} />
            </svg>
            <Range
              label="data"
              max={1}
              value={bundleBeta}
              setValue={setBundleBeta}
            />
          </CurveBox>
          <CurveBox>
            <CurveTitle text="curve-cardial" />
            <svg width="200" height="100" xmlns="http://www.w3.org/2000/svg">
              <Cardial data={data} tension={cardinalTension} />
            </svg>
            <Range
              label="tension"
              max={1}
              value={cardinalTension}
              setValue={setCardinalTension}
            />
          </CurveBox>
        </div>
      </Container>
    </section>
  );
}

interface RangeProps {
  min?: number;
  max?: number;
  step?: number;
  value: number;
  setValue: (value: number) => void;
  label: string;
}

function Range({
  min = 0,
  max = 1,
  step = 0.01,
  value,
  setValue,
  label,
}: RangeProps) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <span className={style.label}>{label}: </span>
      <div style={{ width: 50 }}>
        <span className={style.value}>{value}</span>
      </div>
      <input
        type="range"
        step={step}
        min={min}
        max={max}
        value={value}
        onChange={(e) => setValue(+e.target.value)}
      />
    </div>
  );
}

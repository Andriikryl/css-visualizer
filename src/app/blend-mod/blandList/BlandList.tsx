import React from "react";
import Image from "next/image";
import ImageBlend from "public/blend/blend.webp";
import { motion } from "framer-motion";
import clsx from "clsx";
import style from "./style.module.css";

const dataImage = [
  {
    id: 1,
    src: "/blend/blend.webp",
    title: "mix-blend-mode: color;",
    blend: ".color",
  },
  {
    id: 2,
    src: "/blend/blend.webp",
    title: "mix-blend-mode: color-burn;",
    blend: "color-burn",
  },
  {
    id: 3,
    src: "/blend/blend.webp",
    title: "mix-blend-mode: color-dodge;",
    blend: "color-dodge",
  },
  {
    id: 4,
    src: "/blend/blend.webp",
    title: "mix-blend-mode: darken;",
    blend: "darken",
  },
  {
    id: 5,
    src: "/blend/blend.webp",
    title: "mix-blend-mode: difference;",
    blend: "difference",
  },
  {
    id: 6,
    src: "/blend/blend.webp",
    title: "mix-blend-mode: exclusion;",
    blend: "exclusion",
  },
  {
    id: 7,
    src: "/blend/blend.webp",
    title: "mix-blend-mode: hard-light;",
    blend: "hard-light",
  },
  {
    id: 8,
    src: "/blend/blend.webp",
    title: "mix-blend-mode: hue;",
    blend: "hue",
  },
  {
    id: 9,
    src: "/blend/blend.webp",
    title: "mix-blend-mode: lighten;",
    blend: "lighten",
  },
  {
    id: 10,
    src: "/blend/blend.webp",
    title: "mix-blend-mode:luminosity;",
    blend: "luminosity",
  },
  {
    id: 11,
    src: "/blend/blend.webp",
    title: "mix-blend-mode: multiply;",
    blend: "multiply",
  },
  {
    id: 12,
    src: "/blend/blend.webp",
    title: "mix-blend-mode: normal;",
    blend: "normal",
  },
  {
    id: 13,
    src: "/blend/blend.webp",
    title: "mix-blend-mode: overlay;",
    blend: "overlay",
  },
  {
    id: 14,
    src: "/blend/blend.webp",
    title: "mix-blend-mode: saturation;",
    blend: "saturation",
  },
  {
    id: 15,
    src: "/blend/blend.webp",
    title: "mix-blend-mode:screen;",
    blend: "screen",
  },
  {
    id: 16,
    src: "/blend/blend.webp",
    title: "mix-blend-mode: soft-light;",
    blend: "soft-light",
  },
];

export default function BlandList() {
  return (
    <div className={style.blend__list}>
      {dataImage.map((item) => {
        return (
          <div key={item.id} className={style.blend__box}>
            <h1 className={style.box__title}>{item.title}</h1>
            <div className={style.flex__group}>
              <div>
                <Image src={item.src} width={200} height={300} alt="image" />
              </div>
              <motion.div
                drag
                dragConstraints={{
                  top: -200,
                  left: -200,
                  right: 200,
                  bottom: 200,
                }}
                className={clsx(style.blend__lear)}
              ></motion.div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

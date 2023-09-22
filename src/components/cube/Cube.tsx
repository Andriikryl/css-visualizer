"use client";
import React, { useEffect } from "react";
import { motion, transform, useMotionValue, useTransform } from "framer-motion";
import style from "./style.module.css";
import clsx from "clsx";

export default function Cube() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const opacity = useMotionValue(1);

  useEffect(() => {
    function updateOpacity() {
      const maxXY = Math.max(x.get(), y.get());
      const newOpacity = transform(maxXY, [0, 100], [1, 0]);
      opacity.set(newOpacity);
    }

    const unsubscribeX = x.on("change", updateOpacity);
    const unsubscribeY = y.on("change", updateOpacity);

    return () => {
      unsubscribeX();
      unsubscribeY();
    };
  }, [opacity, x, y]);
  return (
    <div className={style.container}>
      <motion.div className={style.motion__box}>
        <motion.div className={style.inner__box} style={{ x }}></motion.div>
      </motion.div>
    </div>
  );
}

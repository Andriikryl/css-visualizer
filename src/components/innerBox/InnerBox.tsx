import React from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
import style from "./style.module.css";

interface InnerBox {
  className?: string;
  onClick?:  () => void;
}

export default function InnerBox({ className, onClick }: InnerBox) {
  return (
    <motion.div
      className={clsx(style.inner__box, className)}
      onClick={onClick}
      layout
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{
        opacity: 0,
        x: -200,
      }}
      transition={{ opacity: { duration: 0.6 }, x: { duration: 1.2 } }}
    ></motion.div>
  );
}

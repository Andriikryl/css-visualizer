"use client";
import React, { useState } from "react";
import style from "./style.module.css";
import clsx from "clsx";
import { motion } from "framer-motion";
import BlockDescription from "@/components/blockDescription/BlockDescription";
import InnerBox from "@/components/innerBox/InnerBox";
import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";

export default function GridDivCenter() {
  const [isPlaceItemCenter, setIsPlaceItemCenter] = useState(false);

  const handleJustifyCenterChange = () => {
    setIsPlaceItemCenter((prev) => !prev);
  };

  return (
    <div>
      <h4 className={style.center__title}>
        By the way you can do the same using grid
      </h4>
      <div className={style.flex__group}>
        <form className={style.form}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Checkbox.Root
              className={style.CheckboxRoot}
              id="c1"
              checked={isPlaceItemCenter}
              onCheckedChange={handleJustifyCenterChange}
            >
              <Checkbox.Indicator className={style.CheckboxIndicator}>
                <CheckIcon />
              </Checkbox.Indicator>
            </Checkbox.Root>
            <label className={style.Label} htmlFor="c1">
              palce-itemes: center;
            </label>
          </div>
        </form>
        <div>
          <motion.div
            className={clsx(style.box)}
            style={{ placeItems: isPlaceItemCenter ? "center" : "initial" }}
          >
            <InnerBox />
          </motion.div>
          <BlockDescription text="grid container" />
        </div>
      </div>
    </div>
  );
}

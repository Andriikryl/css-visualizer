"use client";
import React, { useState } from "react";
import style from "./style.module.css";
import { motion } from "framer-motion";

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(true);
  function handelClickOpen(){
    setIsOpen(prev => !prev)
  }
  return (
    <motion.div
      animate={{ width: isOpen ? "auto" : "0px" }}
      className={style.side__bar}
    >
      SideBar
      <button className={style.button} onClick={handelClickOpen}>open</button>
    </motion.div>
  );
}

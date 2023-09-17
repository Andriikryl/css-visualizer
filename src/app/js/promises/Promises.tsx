"use client";
import React, { useState } from "react";
import { Container } from "@/components/container/Container";
import { motion } from "framer-motion";
import style from "./style.module.css";
import Button from "@/components/button/Button";
import RePenReg from "./RePenReg/RePenReg";

export default function Promises() {
  return (
    <section className={style.promises__section}>
      <Container>
        <h2 className={style.promises__title}>Promises</h2>
        <RePenReg />
      </Container>
    </section>
  );
}

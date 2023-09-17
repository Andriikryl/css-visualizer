"use client";
import React, { useState } from "react";
import { Container } from "@/components/container/Container";
import { motion } from "framer-motion";
import style from "./style.module.css";
import Button from "@/components/button/Button";
import RePenReg from "./RePenReg/RePenReg";
import Pitfall from "./pitfall/Pitfall";

export default function Promises() {
  return (
    <section className={style.promises__section}>
      <Container>
        <h2 className={style.promises__title}>Promises</h2>
        <RePenReg />
        <p className={style.text__descriptio}>
          When a promise is not pending — so rejected or fulfilled — we call it
          settled. A promise cannot go back to pending once settled.
        </p>
        <Pitfall />
        <p className={style.text__descriptio}>
          Perhaps the most common pitfall is awaiting multiple promises
          sequentially. Thereby, execution is blocked and each following promise
          is not started until the previous one is settled. This makes our code
          run significantly slower.
        </p>
      </Container>
    </section>
  );
}

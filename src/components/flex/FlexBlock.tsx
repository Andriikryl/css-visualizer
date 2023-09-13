"use client";
import React, { useState } from "react";
import { Container } from "../container/Container";
import style from "./style.module.css";
import clsx from "clsx";
import { motion } from "framer-motion";
import Button from "../button/Button";
import JustyfContent from "./justyfContent/JustyfContent";

export default function FlexBlock() {
  return (
    <section className={style.flex__section}>
      <Container>
        <JustyfContent />
      </Container>
    </section>
  );
}

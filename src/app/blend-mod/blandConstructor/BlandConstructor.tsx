"use client";
import { Container } from "@/components/container/Container";
import Image from "next/image";
import React, { ReactNode, useState } from "react";
import BlandMain from "public/blend/blend-main.webp";
import style from "./style.module.css";
import { motion } from "framer-motion";
import Button from "@/components/button/Button";
export default function BlandConstructor() {
  const [layers, setLayers] = useState<ReactNode[]>([]);
  const getRandomColor = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  };
  const createNewLayer = () => {
    const newLayer = (
      <motion.div
        key={layers.length}
        className={style.blend__box}
        drag
        dragConstraints={{
          top: -200,
          left: -700,
          right: 700,
          bottom: 200,
        }}
        style={{ backgroundColor: getRandomColor() }}
      ></motion.div>
    );
    setLayers([...layers, newLayer]);
  };
  return (
    <section className={style.blend__constructor}>
      <Container>
        <div>
          <div className={style.flex__group}>
            <div className={style.image__box}>
              <Image src={BlandMain} width={400} height={500} alt="image" />
            </div>
            {layers}
          </div>
          <div className={style.button__group}>
            <Button text="Create new leyer" onClick={createNewLayer}></Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

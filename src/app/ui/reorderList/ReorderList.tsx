"use client";
import React from "react";
import { Container } from "@/components/container/Container";
import style from "./style.module.css";
import { useState } from "react";
import { Reorder, useMotionValue } from "framer-motion";

const initialItems = [
  "item one",
  "item two",
  "item three",
  "item four",
  "item five",
  "item six",
];
interface ItemProps {
  item: string;
}

export default function ReorderList() {
  const [items, setItems] = useState(initialItems);
  return (
    <section className={style.reorder}>
      <Container>
        <h3 className={style.reorder__list}>Reorder list</h3>
        <Reorder.Group
          axis="y"
          onReorder={setItems}
          values={items}
          className={style.list}
        >
          {items.map((item) => (
            <Item key={item} item={item} />
          ))}
        </Reorder.Group>
      </Container>
    </section>
  );
}

export const Item = ({ item }: ItemProps) => {
  const y = useMotionValue(0);
  return (
    <Reorder.Item value={item} id={item} className={style.item}>
      <span>{item}</span>
    </Reorder.Item>
  );
};

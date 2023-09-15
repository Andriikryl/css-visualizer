import React from "react";
import TitleBlock from "@/components/TitleBlock/TitleBlock";
import { Container } from "@/components/container/Container";
import style from "./style.module.css";
import Link from "next/link";

const reactLinks = [
  {
    id: 1,
    title: "Prop drilling",
    href: "/react/propDrilling",
  },
];

export default function HeroReact() {
  return (
    <section className={style.hero}>
      <Container>
        <TitleBlock text="react" />
        <div></div>
      </Container>
    </section>
  );
}

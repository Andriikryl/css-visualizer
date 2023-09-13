import React from "react";
import style from "./style.module.css";
import { Container } from "../container/Container";

export default function Header() {
  return (
    <header className={style.header}>
      <Container>
        <h1>Header</h1>
      </Container>
    </header>
  );
}

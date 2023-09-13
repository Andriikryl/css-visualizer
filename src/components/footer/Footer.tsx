import React from "react";
import { Container } from "../container/Container";
import style from "./style.module.css";

export default function Footer() {
  return (
    <footer className={style.footer}>
      <Container>
        <h1>Footer</h1>
      </Container>
    </footer>
  );
}

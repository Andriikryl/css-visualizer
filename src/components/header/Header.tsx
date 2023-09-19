"use client";
import React, { useState } from "react";
import style from "./style.module.css";
import { Container } from "../container/Container";
import { motion } from "framer-motion";
import Link from "next/link";
import Button from "../button/Button";

const headerLinks = [
  {
    id: 1,
    title: "Home",
    href: "/",
  },
  {
    id: 2,
    title: "Blend-mode",
    href: "/blend-mod",
  },
  {
    id: 3,
    title: "3D",
    href: "/3D",
  },
  {
    id: 4,
    title: "react",
    href: "/react",
  },
  {
    id: 5,
    title: "js",
    href: "/js",
  },
  {
    id: 6,
    title: "svg",
    href: "/svg",
  },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  function handelClickOpen() {
    setIsOpen((prev) => !prev);
  }

  return (
    <header className={style.header}>
      <Container>
        <div className={style.header__box}>
          <Link href={"/"} className={style.header__title}>
            header
          </Link>
          <Button
            text="open"
            className={style.button}
            onClick={handelClickOpen}
          ></Button>
          <motion.nav
            className={style.nav}
            initial={{ x: -3000 }}
            animate={{ x: isOpen ? 0 : "-100%" }}
            transition={{ duration: 0.5 }}
          >
            <motion.ul className={style.nav__list}>
              {headerLinks.map((link) => {
                return (
                  <motion.li className={style.list__item} key={link.id}>
                    <Link className={style.item__link} href={link.href}>
                      {link.title}
                    </Link>
                  </motion.li>
                );
              })}
            </motion.ul>
          </motion.nav>
        </div>
      </Container>
    </header>
  );
}

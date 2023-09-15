import React from "react";
import style from "./style.module.css";
import { Container } from "../container/Container";
import Link from "next/link";

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
];

export default function Header() {
  return (
    <header className={style.header}>
      <Container>
        <div className={style.header__box}>
          <nav className={style.nav}>
            <ul className={style.nav__list}>
              {headerLinks.map((link) => {
                return (
                  <li className={style.list__item} key={link.id}>
                    <Link className={style.item__link} href={link.href}>
                      {link.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}

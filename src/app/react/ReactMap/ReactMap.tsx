import React from "react";
import { Container } from "@/components/container/Container";
import style from "./style.module.css";
import { MainField } from "@/components/mainField/MainField";

export default function ReactMap() {
  return (
    <section className={style.map}>
      <Container>
        <h2 className={style.map__title}>React map</h2>
        <MainField className={style.map__box}>
          <div className={style.items__box}>
            <h3 className={style.item__title}>state</h3>
            <ul className={style.item__list}>
              <li className={style.list__item}>useState</li>
              <li className={style.list__item}>useReducer</li>
              <li className={style.list__item}>useSyncExternalStore</li>
            </ul>
          </div>
          <div className={style.items__box}>
            <h3 className={style.item__title}>effects</h3>
            <ul className={style.item__list}>
              <li className={style.list__item}>useEffect</li>
              <li className={style.list__item}>useLayoutEffect</li>
              <li className={style.list__item}>useInsertionEffect</li>
            </ul>
          </div>
        </MainField>
      </Container>
    </section>
  );
}

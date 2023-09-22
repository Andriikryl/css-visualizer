import React from "react";
import style from "./style.module.css";
import HeroUi from "./heroUi/HeroUi";
import Tabs from "./tabs/Tabs";

export default function Ui() {
  return (
    <>
      <HeroUi />
      <Tabs />
    </>
  );
}

import React from "react";
import style from "./style.module.css";
import HeroUi from "./heroUi/HeroUi";
import Tabs from "./tabs/Tabs";
import ReorderList from "./reorderList/ReorderList";

export default function Ui() {
  return (
    <>
      <HeroUi />
      <Tabs />
      <ReorderList />
    </>
  );
}

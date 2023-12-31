import React from "react";
import { Container } from "../container/Container";
import style from "./style.module.css";
import JustyfContent from "./justyfContent/JustyfContent";
import SpacePos from "./spacePos/SpacePos";
import FlexDiraction from "./flexDirection/FlexDiraction";
import CenterDiv from "./centerDiv/CenterDiv";
import GridDivCenter from "../grid/gridCenter/GridCenter";
import AlieItems from "./alieItems/AlieItems";
import TitleBlock from "../TitleBlock/TitleBlock";
import FlexThree from "./flexThree/FlexThree";
import Grow from "./grow/Grow";
export default function FlexBlock() {
  return (
    <section className={style.flex__section}>
      <Container>
        <TitleBlock text="Flex" />
        <div className={style.flex__group}>
          <JustyfContent />
          <SpacePos />
          <AlieItems />
          <FlexDiraction />
          <FlexThree />
          <CenterDiv />
          <GridDivCenter />
          <Grow />
        </div>
      </Container>
    </section>
  );
}

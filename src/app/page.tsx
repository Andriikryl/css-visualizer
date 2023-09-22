import BoxSize from "@/components/boxSize/BoxSize";
import FlexBlock from "@/components/flex/FlexBlock";
import Framer from "@/components/framer/Framer";
import Hero from "@/components/hero/Hero";
import Margins from "@/components/margins/Margins";

export default function Home() {
  return (
    <>
      <Hero />
      <Framer />
      <FlexBlock />
      <BoxSize />
      <Margins />
    </>
  );
}

import { CustomBr } from "@/components/atoms/custom-br";

export default {
  title: (
    <>
      Einfachheit in einer
      <br /> komplexen
      <CustomBr byViewport="mobile" /> Finanzwelt
    </>
  ),
  description: (
    <>
      Wir sorgen dafür, dass Sie stets den
      <CustomBr byViewport="mobile" /> Überblick behalten, ohne sich durch
      <br /> komplizierte Prozesse kämpfen zu
      <CustomBr byViewport="mobile" /> müssen. Unser erfahrenes Team
      <br /> vereinfacht selbst komplexe
      <CustomBr byViewport="mobile" /> Finanzfragen, sodass Sie sicher sein
      <CustomBr byViewport="mobile" /> können,
      <CustomBr byViewport="desktop" /> immer gut informiert und
      <CustomBr byViewport="mobile" /> rechtlich auf dem neuesten Stand zu
      <CustomBr byViewport="mobile" /> sein.
    </>
  ),
  button: {
    href: "/uber-uns",
    title: "Gespräch starten",
  },
  img: {
    src: "/imgs/privatkunden/intro/hero.png",
    alt: "Hero",
    title: "Hero",
  },
};

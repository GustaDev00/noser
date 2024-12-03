import { CustomBr } from "@/components/atoms/custom-br";

export default {
  title: (
    <>
      Professionell,
      <CustomBr byViewport="mobile" /> persönlich,
      <br /> partnerschaftlich
    </>
  ),
  description: (
    <>
      Wir sind mehr als nur Ihr
      <CustomBr byViewport="mobile" /> Finanzpartner
    </>
  ),
  link: {
    title: "Mehr dazu",
    href: "/uber-uns",
  },
  img: {
    src: "/imgs/cards/peoples.png",
    alt: "Peoples",
  },
};

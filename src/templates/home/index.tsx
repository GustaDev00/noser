"use client";

import { type FC } from "react";
import Header from "./header";
import Partner from "./partner";
import AboutUs from "./about-us";
import Benefits from "./benefits";
import Downloads from "./downloads";
import WhyChooseUs from "./why-choose-us";

export const HomeTemplate: FC = () => {
  return (
    <>
      <Header />
      <Partner />
      <AboutUs />
      <Benefits />
      <Downloads />
      <WhyChooseUs />
    </>
  );
};

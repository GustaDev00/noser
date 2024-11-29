"use client";

import { type FC } from "react";
import { Header } from "@/components/organisms/header";
import C from "@/constants";
import Intro from "./intro";
import { Article } from "@/components/atoms/article";
import { Accounting } from "@/components/atoms/accounting";
import { Advantages } from "@/components/atoms/advantages";

export const PrivatkundenTemplate: FC = () => {
  return (
    <>
      <Header {...C.privatkunden.banner} />
      <Intro />
      <Article imgs={C.privatkunden.content.img}>{C.privatkunden.content.text}</Article>
      <Accounting {...C.privatkunden.accounting} />
      <Advantages {...C.privatkunden.advantages} />
    </>
  );
};

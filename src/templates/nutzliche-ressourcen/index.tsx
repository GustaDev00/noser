"use client";

import { type FC } from "react";
import C from "./constants";
import * as S from "./styles";
import { Header } from "@/components/organisms/header";
import { Accounting } from "@/components/atoms/accounting";
import { Article } from "@/components/atoms/article";
import { Advantages } from "@/components/atoms/advantages";
import Intro from "./intro";
import Links from "./links";

export const NutzlichRessourcenTemplate: FC = () => {
  return (
    <>
      <S.Header {...C.banner} position="left" />
      <Intro />
      <Links />
      {/* <S.Accounting>
        <Accounting {...C.accounting} />
        <Article imgs={C.content.img}>{C.content.text}</Article>
      </S.Accounting>
      <Advantages {...C.advantages} /> */}
    </>
  );
};

"use client";

import { type FC } from "react";
import C from "./constants";
import * as S from "./styles";
import Intro from "./intro";
import Links from "./links";

export const NutzlichRessourcenTemplate: FC = () => {
  return (
    <>
      <S.Header {...C.banner} position="left" />
      <Intro />
      <Links />
    </>
  );
};

"use client";

import { type FC } from "react";
import { Header } from "@/components/organisms/header";
import C from "@/constants";
import Intro from "./intro";
import { Article } from "@/components/atoms/article";

export const PrivatkundenTemplate: FC = () => {
  return (
    <>
      <Header {...C.privatkunden.banner} />
      <Intro />
      <Article imgs={C.privatkunden.content.img}>{C.privatkunden.content.text}</Article>
    </>
  );
};

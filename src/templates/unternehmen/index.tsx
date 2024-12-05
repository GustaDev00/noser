"use client";

import { type FC } from "react";
import C from "./constants";
import * as S from "./styles";
import { Accounting } from "@/components/atoms/accounting";
import { Article } from "@/components/atoms/article";
import { Advantages } from "@/components/atoms/advantages";

export const UnternehmenTemplate: FC = () => {
  return (
    <>
      <S.Header {...C} />
      <S.Accounting>
        <Accounting {...C.accounting} />
        <Article imgs={C.content.img}>{C.content.text}</Article>
      </S.Accounting>
      <Advantages {...C.advantages} />
    </>
  );
};

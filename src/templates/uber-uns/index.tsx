"use client";

import { type FC } from "react";
import C from "./constants";
import * as S from "./styles";
import Team from "./team";

export const UberUnsTemplate: FC = () => {
  return (
    <>
      <S.Header {...C.header} />
      <S.Article imgs={C.content.imgs}>{C.content.text}</S.Article>
      <Team />
      <S.ArticleInverted imgs={C.content_inverted.imgs} tag={true} invert={true}>
        {C.content_inverted.text}
      </S.ArticleInverted>
    </>
  );
};

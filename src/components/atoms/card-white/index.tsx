import { FC } from "react";
import { CardWhiteProps } from "./props";
import * as S from "./styles";

export const CardWhite: FC<CardWhiteProps> = ({ icon, title, description, link, ...props }) => (
  <S.CardWhite {...props}>
    <S.Content>
      <S.Article>
        <S.Icon>{icon}</S.Icon>
        <S.Title>{title}</S.Title>
      </S.Article>
      <S.Description>{description}</S.Description>
    </S.Content>
    {link && (
      <S.Container>
        <S.Link {...link} />
      </S.Container>
    )}
  </S.CardWhite>
);

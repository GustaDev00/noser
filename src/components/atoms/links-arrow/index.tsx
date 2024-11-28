import { FC } from "react";
import { LinksArrowProps } from "./props";
import * as S from "./styles";

export const LinksArrow: FC<LinksArrowProps> = ({ title, href, ...props }) => (
  <S.Link href={href} title={title} {...props}>
    <S.Text>{title}</S.Text>
    <S.Icon />
  </S.Link>
);

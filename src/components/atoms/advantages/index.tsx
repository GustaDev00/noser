import * as S from "./styles";
import useAnimation from "./animation";
import { FC } from "react";
import { AdvantagesProps } from "./props";

export const Advantages: FC<AdvantagesProps> = ({ bg, title, list, ...props }) => {
  useAnimation();

  return (
    <S.Advantages {...props}>
      <S.Bg {...bg} />
      <S.Wrapper>
        <S.Title>{title}</S.Title>
        <S.Container>
          {list.map(({ title, text }, index) => (
            <S.Content key={index}>
              <S.SubTitle>{title}</S.SubTitle>
              <S.Text>{text}</S.Text>
            </S.Content>
          ))}
        </S.Container>
      </S.Wrapper>
    </S.Advantages>
  );
};

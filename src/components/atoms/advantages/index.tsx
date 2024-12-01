import * as S from "./styles";
import { FC } from "react";
import { AdvantagesProps } from "./props";
import useAnimation from "./animation";

export const Advantages: FC<AdvantagesProps> = ({ bg, title, list, ...props }) => {
  const { sectionRef } = useAnimation();

  return (
    <S.Advantages ref={sectionRef} {...props}>
      <S.Bg {...bg} data-timeline="bg" />
      <S.Wrapper data-timeline="wrapper">
        <S.Title data-timeline="title">{title}</S.Title>
        <S.Container data-timeline="container">
          {list.map(({ title, text }, index) => (
            <S.Content key={index} data-timeline="content">
              <S.SubTitle>{title}</S.SubTitle>
              <S.Text>{text}</S.Text>
            </S.Content>
          ))}
        </S.Container>
      </S.Wrapper>
    </S.Advantages>
  );
};

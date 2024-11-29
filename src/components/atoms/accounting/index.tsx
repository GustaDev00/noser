import * as S from "./styles";
import C from "./constants";
import useAnimation from "./animation";
import { FC, useState } from "react";
import { AccountingProps } from "./props";

export const Accounting: FC<AccountingProps> = ({ img, list, ...props }) => {
  const [active, setActive] = useState(0);
  useAnimation();

  return (
    <S.Accounting {...props}>
      <S.Wrapper>
        <S.Intro>
          <S.Title>{C.title}</S.Title>
          <S.Button {...C.button}>{C.button.title}</S.Button>
        </S.Intro>
        <S.Line />
        <S.Container>
          <S.Content>
            <S.List>
              {list.map(({ title, content }, index) => (
                <S.Item key={index} $active={index === active} onClick={() => setActive(index)}>
                  <S.Article>
                    <S.SubTitle>{title}</S.SubTitle>
                    <S.Arrow />
                  </S.Article>
                  <S.Text>{content}</S.Text>
                </S.Item>
              ))}
            </S.List>
          </S.Content>
          <S.Image {...img} />
        </S.Container>
      </S.Wrapper>
    </S.Accounting>
  );
};

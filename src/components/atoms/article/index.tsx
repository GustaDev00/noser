import * as S from "./styles";
import { FC } from "react";
import { ArticleProps } from "./props";
import useAnimation from "./animation";

export const Article: FC<ArticleProps> = ({ imgs, tag, invert, children, ...props }) => {
  const { sectionRef } = useAnimation();

  return (
    <S.Article ref={sectionRef} {...props}>
      <S.Wrapper $inverted={invert} data-timeline="wrapper">
        <S.Container data-timeline="container">
          {imgs.map((img, i) => (
            <S.Img key={i} {...img} data-timeline="img" />
          ))}

          {tag && <S.Card type="quality" data-timeline="card" />}
        </S.Container>
        <S.Content data-timeline="content">{children}</S.Content>
      </S.Wrapper>
    </S.Article>
  );
};

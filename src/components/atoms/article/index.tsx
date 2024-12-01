import * as S from "./styles";
import C from "./constants";
import useAnimation from "./animation";
import { FC } from "react";
import { ArticleProps } from "./props";

export const Article: FC<ArticleProps> = ({ imgs, tag, invert, children, ...props }) => {
  useAnimation();

  return (
    <S.Article {...props}>
      <S.Wrapper $inverted={invert}>
        <S.Container>
          {imgs.map((img, i) => (
            <S.Img key={i} {...img} />
          ))}

          {tag && <S.Card type="quality" />}
        </S.Container>
        <S.Content>{children}</S.Content>
      </S.Wrapper>
    </S.Article>
  );
};

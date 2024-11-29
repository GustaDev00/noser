import C from "./constants";
import * as S from "./styles";

export default () => {
  return (
    <S.Intro>
      <S.Wrapper>
        <S.Content>
          <S.Article>
            <S.Title>{C.title}</S.Title>
            <S.Button {...C.button}>{C.button.title}</S.Button>
          </S.Article>
          <S.Text>{C.description}</S.Text>
        </S.Content>
        <S.Img {...C.img} />
      </S.Wrapper>
    </S.Intro>
  );
};

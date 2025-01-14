import * as S from "./styles";
import C from "./constants";

export default () => {
  const { title, img } = C;

  return (
    <S.Wrapper>
      <S.Content>
        <S.Icon />
        <S.Title>{title}</S.Title>
      </S.Content>
      <S.Container>
        <S.Link href="https://www.treuhandsuisse.ch/" target="_blank">
          <S.Img {...img} />
        </S.Link>
      </S.Container>
    </S.Wrapper>
  );
};

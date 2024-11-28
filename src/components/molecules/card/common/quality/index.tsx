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
        <S.Img {...img} />
      </S.Container>
    </S.Wrapper>
  );
};

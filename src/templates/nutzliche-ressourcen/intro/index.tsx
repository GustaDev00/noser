import C from "./constants";
import * as S from "./styles";

export default () => {
  return (
    <S.Intro>
      <S.Wrapper>
        <S.Title>{C.title}</S.Title>
        <S.Description>{C.description}</S.Description>
      </S.Wrapper>
    </S.Intro>
  );
};

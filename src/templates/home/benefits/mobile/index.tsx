import * as S from "../styles";
import C from "../constants";

export default () => {
  return (
    <S.BenefitsMobile>
      <S.Wrapper>
        <S.Content>
          <S.Title>Unsere Vorteile</S.Title>
          <S.Link href="#" title="Unsere Treuhandlösungen" />
        </S.Content>
        <S.Container>
          <S.WrapperCards>
            {C.map(({ img, text }, index) => (
              <S.Card key={index}>
                <S.Background {...img} />
                <S.Article>
                  <S.Position>({index + 1})</S.Position>
                  <S.Text>{text}</S.Text>
                </S.Article>
              </S.Card>
            ))}
          </S.WrapperCards>
        </S.Container>
      </S.Wrapper>
    </S.BenefitsMobile>
  );
};

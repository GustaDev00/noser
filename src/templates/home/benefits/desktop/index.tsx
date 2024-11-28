import * as S from "../styles";
import C from "../constants";
import useAnimations from "./animations";

export default () => {
  const { sectionRef, containerRef } = useAnimations();

  return (
    <S.BenefitsDesktop ref={sectionRef}>
      <S.Wrapper>
        <S.Content>
          <S.Title>Unsere Vorteile</S.Title>
          <S.Link href="#" title="Unsere Treuhandlösungen" />
        </S.Content>
        <S.Container ref={containerRef}>
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
    </S.BenefitsDesktop>
  );
};

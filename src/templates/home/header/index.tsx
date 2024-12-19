import { CustomBr } from "@/components/atoms/custom-br";
import * as S from "./styles";
import { Card } from "@/components/molecules/card";
import useAnimation from "./animation";

export default () => {
  const { sectionRef } = useAnimation();

  return (
    <S.Header ref={sectionRef}>
      <S.Background src="./imgs/home/header/bg.png" alt="Background" data-timeline="background" />
      <S.Wrapper data-timeline="wrapper">
        <S.Content data-timeline="content">
          <S.Title data-timeline="title">
          Mehr als Minus und Plus. Mehr als Soll und Haben.
          </S.Title>
          <S.Subtitle data-timeline="subtitle">
            Ihre Finanzen, klar und
            <CustomBr byViewport="mobile" /> verständlich – damit Sie sich
            <CustomBr byViewport="mobile" /> entspannt auf Ihre Ziele
            <br data-timeline="br" />
            konzentrieren können.
          </S.Subtitle>
       
          <S.Button data-timeline="button" title="Gespräch starten">
            Gespräch starten
          </S.Button>
        </S.Content>
        <S.Divider data-timeline="divider" />
        <S.Container data-timeline="container">
          <Card type="peoples" data-timeline="card-peoples" />
          <Card type="quality" data-timeline="card-quality" />
        </S.Container>
      </S.Wrapper>
    </S.Header>
  );
};

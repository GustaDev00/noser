import { CustomBr } from "@/components/atoms/custom-br";
import * as S from "./styles";
import { Card } from "@/components/molecules/card";

export default () => {
  return (
    <S.Header>
      <S.Background src="./imgs/home/header/bg.png" alt="Background" />
      <S.Wrapper>
        <S.Content>
          <S.Title>
            Vertrauen <S.Line /> Erfolg
          </S.Title>
          <S.Subtitle>
            Ihre Finanzen, klar und
            <CustomBr byViewport="mobile" /> verständlich – damit Sie sich
            <CustomBr byViewport="mobile" /> entspannt auf Ihre Ziele
            <br />
            konzentrieren können.
          </S.Subtitle>
          <S.Button data-timeline="button">Gespräch starten</S.Button>
        </S.Content>
        <S.Divider />
        <S.Container>
          <Card type="peoples" />
          <Card type="quality" />
        </S.Container>
      </S.Wrapper>
    </S.Header>
  );
};

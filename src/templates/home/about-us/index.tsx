import { CustomBr } from "@/components/atoms/custom-br";
import * as S from "./styles";

export default () => (
  <S.AboutUs>
    <S.Wrapper>
      <S.Title>
        Noser Treuhand –
        <CustomBr byViewport="mobile" /> weil
        <CustomBr byViewport="desktop" /> Vertrauen der
        <CustomBr byViewport="mobile" /> beste Partner ist
      </S.Title>
      <S.Container>
        <S.Img src="/imgs/home/about-us/img.png" alt="Image" title="Image" />

        <S.Content>
          <S.ImageSmall
            src="/imgs/home/about-us/img-small.png"
            alt="Image small"
            title="Image small"
          />
          <S.Text>
            Seit unserer Gründung haben wir nur ein Ziel: Ihre
            <CustomBr byViewport="desktop" /> finanziellen und administrativen Aufgaben so zu
            <br /> gestalten, dass Sie sich auf das konzentrieren können,
            <CustomBr byViewport="desktop" /> was Sie am besten können.
          </S.Text>

          <S.Text>
            Wir glauben, dass Finanzen und Steuern keine
            <br /> Geheimwissenschaften sein sollten – unsere Philosophie ist
            <br /> Transparenz. Klarheit in jeder Frage und eine unkomplizierte
            <CustomBr byViewport="desktop" /> Beratung, die Sie wirklich entlastet.
          </S.Text>
        </S.Content>
      </S.Container>
    </S.Wrapper>
  </S.AboutUs>
);

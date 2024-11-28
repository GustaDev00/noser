import * as S from "./styles";
import C from "./constants";
import { CustomBr } from "@/components/atoms/custom-br";

export default () => {
  return (
    <S.WhyChooseUs>
      <S.Wrapper>
        <S.Content>
          <S.Title>Verlässlichkeit, die den Unterschied macht</S.Title>
          <S.Description>
            Verlässlichkeit, Kompetenz und Engagement – gemeinsam sorgen wir für eine starke
            <CustomBr byViewport="desktop" />
            finanzielle Basis und eine erfolgreiche Zukunft.
          </S.Description>
        </S.Content>
        <S.Container>
          <S.Img>
            <S.Text>{C.image.text}</S.Text>
            <S.Imagem {...C.image.img} />
          </S.Img>
          <S.List>
            {C.cards.map((card, index) => (
              <S.Item key={index}>
                <S.Card {...card} />
              </S.Item>
            ))}
          </S.List>
        </S.Container>
      </S.Wrapper>
    </S.WhyChooseUs>
  );
};

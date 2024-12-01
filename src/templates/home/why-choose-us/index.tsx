import * as S from "./styles";
import C from "./constants";
import { CustomBr } from "@/components/atoms/custom-br";
import useAnimation from "./animation";

export default function WhyChooseUs() {
  const { sectionRef } = useAnimation();

  return (
    <S.WhyChooseUs ref={sectionRef}>
      <S.Wrapper data-timeline="wrapper">
        <S.Content data-timeline="content">
          <S.Title data-timeline="title">Verlässlichkeit, die den Unterschied macht</S.Title>
          <S.Description data-timeline="description">
            Verlässlichkeit, Kompetenz und Engagement – gemeinsam sorgen wir für eine starke
            <CustomBr byViewport="desktop" />
            finanzielle Basis und eine erfolgreiche Zukunft.
          </S.Description>
        </S.Content>
        <S.Container data-timeline="container">
          <S.Img data-timeline="img">
            <S.Text>{C.image.text}</S.Text>
            <S.Imagem {...C.image.img} />
          </S.Img>
          <S.List>
            {C.cards.map((card, index) => (
              <S.Item key={index} data-timeline="list-item">
                <S.Card {...card} />
              </S.Item>
            ))}
          </S.List>
        </S.Container>
      </S.Wrapper>
    </S.WhyChooseUs>
  );
}

import * as S from "./styles";
import C from "./constants";
import { useState } from "react";
import useAnimation from "./animation";

export default () => {
  const [activeCards, setActiveCards] = useState<number[]>([0]);
  const { sectionRef } = useAnimation();

  const handleCardClick = (index: number) => {
    setActiveCards((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  return (
    <S.Team ref={sectionRef}>
      <S.Wrapper data-timeline="wrapper">
        <S.Content data-timeline="content">
          <S.Title data-timeline="title">{C.title}</S.Title>
          <S.Description data-timeline="description">{C.description}</S.Description>
        </S.Content>
        <S.Container data-timeline="container">
          {C.team.map(({ name, text, photo }, index) => (
            <S.Card
              key={index}
              $active={activeCards.includes(index)}
              onClick={() => handleCardClick(index)}
              data-timeline="card"
            >
              <S.Img {...photo} />
              <S.Article>
                <S.ContentCard>
                  <S.Text>
                    <S.Name>{name}</S.Name>
                    <S.Arrow />
                  </S.Text>
                  <S.Span>{text}</S.Span>
                </S.ContentCard>
              </S.Article>
            </S.Card>
          ))}
        </S.Container>
      </S.Wrapper>
    </S.Team>
  );
};

import * as S from "./styles";
import C from "./cosntants";
import { useState } from "react";

export default () => {
  const [activeCards, setActiveCards] = useState<number[]>([]);

  const handleCardClick = (index: number) => {
    setActiveCards((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  return (
    <S.Team>
      <S.Wrapper>
        <S.Content>
          <S.Title>{C.title}</S.Title>
          <S.Description>{C.description}</S.Description>
        </S.Content>
        <S.Container>
          {C.team.map(({ name, text, photo }, index) => (
            <S.Card
              key={index}
              $active={activeCards.includes(index)}
              onClick={() => handleCardClick(index)}
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

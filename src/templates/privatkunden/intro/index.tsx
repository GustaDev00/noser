import C from "./constants";
import * as S from "./styles";
import useAnimation from "./animation";

export default function Intro() {
  const { sectionRef } = useAnimation();

  return (
    <S.Intro ref={sectionRef}>
      <S.Wrapper data-timeline="wrapper">
        <S.Content data-timeline="content">
          <S.Article data-timeline="article">
            <S.Title data-timeline="title">{C.title}</S.Title>
            <S.Button data-timeline="button" {...C.button}>
              {C.button.title}
            </S.Button>
          </S.Article>
          <S.Text data-timeline="text">{C.description}</S.Text>
        </S.Content>
        <S.Img data-timeline="img" {...C.img} />
      </S.Wrapper>
    </S.Intro>
  );
}

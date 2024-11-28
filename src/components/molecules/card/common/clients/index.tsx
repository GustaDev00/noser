import * as S from "./styles";
import C from "./constants";

export default () => {
  const { title, description, imgs } = C;

  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Container>
        {imgs.map((img, index) => (
          <S.Imgs key={index} src={img.src} alt={img.alt} />
        ))}
      </S.Container>
    </S.Wrapper>
  );
};

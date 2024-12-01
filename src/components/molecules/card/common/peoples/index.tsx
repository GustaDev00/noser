import * as S from "./styles";
import C from "./constants";

export default ({ ...props }) => {
  const { img, title, description, link } = C;

  return (
    <S.Wrapper>
      <S.img {...img} />
      <S.Content>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
        <S.Link {...link}>
          <S.Text>{link.title}</S.Text>
          <S.Icon />
        </S.Link>
      </S.Content>
    </S.Wrapper>
  );
};

import { ResponsiveElement } from "@/utils/responsive-element";
import * as S from "./styles";
import C from "@/constants";

export default () => {
  return (
    <S.Services>
      <S.Wrapper>
        <S.Background {...C.services.bg} />
        <S.Container>
          <ResponsiveElement
            breakpoints={{ mobile: <S.Img {...C.services.img.mobile} /> }}
            content={<S.Img {...C.services.img.desktop} />}
          />
          <S.Tags>
            {C.services.tags.map((tag, index) => (
              <S.Tag key={index}>{tag}</S.Tag>
            ))}
          </S.Tags>
          <S.Content>
            <S.Title>{C.services.title}</S.Title>
            <S.Line />
            <S.Subtitle>{C.services.description}</S.Subtitle>
            <S.Button {...C.services.button} />
          </S.Content>
        </S.Container>
      </S.Wrapper>
    </S.Services>
  );
};

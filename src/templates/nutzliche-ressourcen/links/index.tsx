import C from "./constants";
import * as S from "./styles";

export default () => {
  return (
    <S.LinkSection>
      <S.Wrapper>
        <S.Container>
          {C.list.map(({ title, items, description }, index) => (
            <S.ContentLinks key={index}>
              <S.Article>
                <S.Title>{title}</S.Title>
                {description && <S.Description>{description}</S.Description>}
              </S.Article>

              {items.map(({ title, href }, index) => (
                <S.Item key={index}>
                  <S.Link href={href} title={title} target="_blank">
                    <S.Text>{title}</S.Text>
                    <S.Icon>
                      <S.DownloadIcon />
                    </S.Icon>
                  </S.Link>
                </S.Item>
              ))}
            </S.ContentLinks>
          ))}

          <S.Img {...C.img} />
        </S.Container>
      </S.Wrapper>
    </S.LinkSection>
  );
};

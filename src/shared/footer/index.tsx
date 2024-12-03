import { CustomBr } from "@/components/atoms/custom-br";
import * as S from "./styles";
import C from "@/constants";
import { useCallback } from "react";

export const Footer = () => {
  const handleClickUpPage = useCallback(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <S.Cta>
        <S.WrapperCta>
          <S.TitleCta>
            Mehr Klarheit
            <CustomBr byViewport="mobile" /> und Ruhe
            <CustomBr byViewport="desktop" /> für
            <CustomBr byViewport="mobile" /> Ihre Finanzen
          </S.TitleCta>
          <S.SubtitleCta>
            Wir sind für Sie da.
            <br /> Sprechen wir darüber, wie wir
            <CustomBr byViewport="mobile" /> Ihre Ziele
            <CustomBr byViewport="desktop" /> realisieren.
          </S.SubtitleCta>
          <S.ButtonCta href="/kontakt">Gespräch starten</S.ButtonCta>
        </S.WrapperCta>
      </S.Cta>
      <S.Footer>
        <S.ButtonUp onClick={handleClickUpPage}>
          <S.ArrowUp />
        </S.ButtonUp>
        <S.Wrapper>
          <S.Column $first={true}>
            <S.Logo />
            <S.Line>
              <S.List>
                <S.Item>
                  <S.Link href={C.phone.link} target="_blank">
                    {C.phone.footer}: {C.phone.number}
                  </S.Link>
                </S.Item>

                <S.Item>
                  <S.Link href={C.mail.link} target="_blank">
                    {C.mail.footer}: {C.mail.email}
                  </S.Link>
                </S.Item>

                <S.Item>{C.text}</S.Item>
              </S.List>
            </S.Line>

            <S.SocialShare>
              {C.footer.share.map(({ href, icon: Icon, title }, index) => (
                <S.Link href={href} title={title} key={title}>
                  <Icon />
                </S.Link>
              ))}
            </S.SocialShare>
          </S.Column>
          <S.Column>
            <S.TitleLine>{C.footer.categoriesText}</S.TitleLine>
            <S.List>
              {C.categories.map((link) => (
                <S.Item key={link.title}>
                  <S.Link {...link}>{link.title}</S.Link>
                </S.Item>
              ))}
            </S.List>
          </S.Column>
          <S.Column>
            <S.TitleLine>{C.footer.time.text}</S.TitleLine>

            <S.List>
              {C.footer.time.days.map((text, index) => (
                <S.Item key={index}>{text}</S.Item>
              ))}
            </S.List>
          </S.Column>
        </S.Wrapper>
        <S.Info>
          <S.Copy>{C.footer.copyrigth.text}</S.Copy>
          <S.Agency>{C.footer.copyrigth.fiber}</S.Agency>
        </S.Info>
      </S.Footer>
    </>
  );
};

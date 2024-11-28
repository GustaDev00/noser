import { CustomBr } from "@/components/atoms/custom-br";
import * as S from "./styles";
import { CustomersIcons } from "@/components/svgs/customers";
import { PursueIcon } from "@/components/svgs/pursue";

export default () => {
  return (
    <S.Partner>
      <S.Wrapper>
        <S.Content>
          <S.Title>
            Ihre
            <CustomBr byViewport="mobile" /> Treuhandpartner
            <CustomBr byViewport="mobile" /> für
            <CustomBr byViewport="desktop" /> nachhaltigen
            <CustomBr byViewport="mobile" /> Erfolg
          </S.Title>
          <S.Description>
            Individuelle Beratung und
            <CustomBr byViewport="mobile" /> zuverlässige Unterstützung für
            <br /> Ihren finanziellen Erfolg.
          </S.Description>
          <S.Container>
            <S.Card
              icon={<CustomersIcons />}
              title={<>Privatkunden</>}
              description={
                <>
                  Für Privatpersonen bieten wir
                  <CustomBr byViewport="mobile" /> umfassende
                  <CustomBr byViewport="desktop" /> Unterstützung bei
                  <CustomBr byViewport="mobile" /> steuerlichen und finanziellen Fragen.
                  <br /> Ob Steuererklärung oder
                  <CustomBr byViewport="mobile" /> Nachlassplanung – wir
                  <CustomBr byViewport="desktop" /> machen es
                  <CustomBr byViewport="mobile" /> einfach, damit Sie sich auf die
                  <CustomBr byViewport="mobile" /> wichtigen
                  <CustomBr byViewport="desktop" /> Dinge im Leben
                  <CustomBr byViewport="mobile" /> konzentrieren können.
                </>
              }
              link={{
                href: "#",
                title: "Mehr dazu",
              }}
            />
            <S.Card
              icon={<PursueIcon />}
              title={<>Unternehmen</>}
              description={
                <>
                  Für Unternehmen bieten wir
                  <CustomBr byViewport="mobile" /> umfassende
                  <CustomBr byViewport="desktop" /> Unterstützung in den
                  <CustomBr byViewport="mobile" /> Bereichen Buchhaltung,
                  <br /> Lohnadministration,
                  <CustomBr byViewport="mobile" /> Steuerberatung, Firmengründung
                  <br /> und Treuhandmandate. Ihr Geschäft
                  <CustomBr byViewport="mobile" /> wächst – wir
                  <CustomBr byViewport="desktop" /> kümmern uns um die
                  <CustomBr byViewport="mobile" /> Details, damit Sie sich auf Ihre
                  <CustomBr byViewport="desktop" /> Ideen
                  <CustomBr byViewport="mobile" /> und Ihr Team konzentrieren können.
                </>
              }
              link={{
                href: "#",
                title: "Mehr dazu",
              }}
            />
          </S.Container>
        </S.Content>
        <S.Img
          src="/imgs/home/partner/img.png"
          alt="Individuelle Beratung und zuverlässige Unterstützung für Ihren finanziellen Erfolg."
        />
      </S.Wrapper>
    </S.Partner>
  );
};

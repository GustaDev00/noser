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
                  Für Privatpersonen bieten wir Unterstützung in steuerlichen und finanziellen
                  Fragen: Steuererklärungen, Steuerberatung, Budget- und Finanzplanung,
                  Nachlassplanung, Willensvollstreckung und Vertragserstellung – alles, damit Sie
                  sich entspannt auf die wichtigen Dinge im Leben konzentrieren können.
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
                  Für Unternehmen bieten wir umfassende Unterstützung in den Bereichen Buchhaltung,
                  Lohnadministration, Steuerberatung, Firmengründung und Treuhandmandate. Ihr
                  Geschäft wächst – wir kümmern uns um die Details, damit Sie sich auf Ihre Ideen
                  und Ihr Team konzentrieren können.
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

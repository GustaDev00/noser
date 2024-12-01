import { CustomBr } from "@/components/atoms/custom-br";

export default {
  header: {
    title: (
      <>
        Professionell, persönlich,
        <CustomBr byViewport="desktop" /> partnerschaftlich
      </>
    ),
    description: (
      <>
        Wir sind mehr als nur Ihr Finanzpartner – wir sind Ihre Unterstützung, wenn es darauf
        ankommt, und schaffen gemeinsam
        <CustomBr byViewport="desktop" /> klare Strukturen, auf die Sie sich verlassen können. Bei
        Noser Treuhand setzen wir auf Vertrauen, Transparenz und echte
        <CustomBr byViewport="desktop" /> Zusammenarbeit, damit Sie stets das Gefühl haben, Ihre
        Angelegenheiten sind in den besten Händen.
      </>
    ),
    background: {
      src: "/imgs/uber-uns/bg.png",
      alt: "Background Header",
    },
  },
  content: {
    imgs: [
      {
        src: "/imgs/uber-uns/content.png",
        alt: "Img 01",
      },
      {
        src: "/imgs/uber-uns/content2.png",
        alt: "Img 01",
      },
    ],
    text: (
      <>
        <h2>
          Fokussiert, und mit einem
          <CustomBr byViewport="desktop" /> klaren Ziel: Ihre Absicherung
        </h2>

        <p>
          Bei Noser Treuhand <b>stehen Ihre Ziele im Mittelpunkt</b> unserer Arbeit. Wir wissen,
          dass Finanzen und Steuern weit mehr sind als nur Zahlen – sie sind Teil Ihrer Geschichte
          und verlangen nach Vertrauen, Respekt und Diskretion. Diese Überzeugung prägt unsere
          Philosophie: Wir sind nicht nur ein Dienstleister, sondern ein verlässlicher Partner an
          Ihrer Seite, der Sie bei jedem Schritt unterstützt.
          <br />
          <br />
          Mit unserer langjährigen Erfahrung und einem klaren, transparenten Ansatz{" "}
          <b>machen wir das Komplexe verständlich</b> und geben Ihnen die Sicherheit, jeden Schritt
          im Detail zu überblicken. Wir kümmern uns um Ihre finanziellen und organisatorischen
          Angelegenheiten, damit Sie sich ganz auf das Wesentliche konzentrieren können – sei es
          Ihre Familie, Ihr Unternehmen oder Ihre persönliche Lebensqualität.
          <br />
          <br />
          Unsere Philosophie basiert darauf, <b>immer einen Schritt vorauszudenken</b>. Mit einem
          offenen Ohr und einem geschulten Blick für Lösungen begleiten wir Sie auf Ihrem Weg.
          Vertrauen, Offenheit und eine persönliche Verbindung – das sind die Grundwerte, die unsere
          Zusammenarbeit mit Ihnen stärken.
        </p>
      </>
    ),
  },
  content_inverted: {
    invert: true,
    imgs: [
      {
        src: "/imgs/uber-uns/card.png",
        alt: "Img 01",
      },
    ],

    text: (
      <>
        <h2>
          Unsere Geschichte –<CustomBr byViewport="desktop" /> Vertrauen, das wächst
        </h2>

        <p>
          Seit 2015 steht Noser Treuhand für Klarheit und Verlässlichkeit in allen steuerlichen und
          finanziellen Belangen. Aus einem kleinen Team ist ein starker Partner für Privatpersonen
          und Unternehmen geworden. Unsere Stärke? Die Verbindung von tiefen regionalen Wurzeln und
          modernem Know-how, die uns zu einer verlässlichen Unterstützung macht.
          <br />
          <br />
          Durch die stetige Weiterentwicklung unseres Fachwissens und unserer Prozesse begleiten wir
          Sie in jeder Phase – kompetent, umsichtig und auf Ihre Bedürfnisse zugeschnitten. Unser
          Weg zeigt, dass Kontinuität und ein klarer Anspruch die Basis für eine erfolgreiche
          Zusammenarbeit sind. Noser Treuhand – Ihr zuverlässiger Ansprechpartner für alle Fragen
          rund um Treuhand.
        </p>
      </>
    ),
  },
};

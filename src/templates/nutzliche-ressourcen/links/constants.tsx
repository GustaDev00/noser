import { CustomBr } from "@/components/atoms/custom-br";

export default {
  img: {
    src: "/imgs/nutzliche-ressourcen/links.jpeg",
    alt: "Nützliche Links für Ihre Finanz- und Verwaltungsbedürfnisse",
  },
  list: [
    {
      title: <>Kantonale Links</>,
      items: [
        { href: "https://www.gl.ch/", title: "Webseite Kanton Glarus" },
        {
          href: "https://www.gl.ch/verwaltung/finanzen-und-gesundheit/steuern.html/507",
          title: "Steuerverwaltung Kanton Glarus",
        },
        {
          href: "https://www.gl.ch/verwaltung/volkswirtschaft-und-inneres/wirtschaft-und-arbeit/handelsregister.html/1038",
          title: "Handelsregisteramt Kanton Glarus",
        },
        {
          href: "https://www.svgl.ch/",
          title: "Sozialversicherungen Kanton Glarus",
        },
        {
          href: "https://www.gl.ch/verwaltung/finanzen-und-gesundheit/steuern/quellensteuer.html/497",
          title: "Quellensteuern Kanton Glarus",
        },
        {
          href: "https://www.ahveasy.ch/",
          title: "Sozialversicherungen - Login AHV Easy",
        },
        {
          href: "https://www.glarus-nord.ch/",
          title: "Webseite Gemeinde Glarus Nord",
        },
        {
          href: "https://www.glarus.ch/",
          title: "Webseite Gemeinde Glarus Mitte",
        },
        {
          href: "https://www.glarus-sued.ch/",
          title: "Webseite Gemeinde Glarus Süd",
        },
      ],
    },
    {
      title: <>Nationale Links</>,
      items: [
        {
          href: "https://www.zefix.ch/de/search/entity/welcome",
          title: "Zefix (Zentraler Firmenindex)",
        },
        {
          href: "https://www.estv.admin.ch/estv/de/home.html",
          title: "Eidg. Steuerverwaltung Bern",
        },
        {
          href: "https://www.easygov.swiss/easygov/#/",
          title: "EasyGov - Online Schalter für Unternehmen",
        },
        {
          href: "https://www.treuhandsuisse.ch/",
          title: "Treuhand Suisse",
        },
      ],
    },
    {
      title: <>Downloads</>,
      description: (
        <>
          Praktische Dokumente und Vorlagen für Ihre steuerlichen und finanziellen
          <CustomBr byViewport="desktop" /> Bedürfnisse.
        </>
      ),
      items: [
        
        {
          href: "https://drive.google.com/file/d/1R3V9xYa7BWV9xiG0dHYBl0CVkM4ieiPH/view",
          title: "Steuererklärung 2024 Checkliste für natürliche Personen (PDF)",
        },
        {
          href: "https://files.designer.hoststar.ch/35/c2/35c2645e-0d2d-460c-822f-665118046f6a.pdf",
          title: "Datenschutzerklärung – Noser Treuhand GmbH (PDF)",
        },
      ],
    },
  ],
};

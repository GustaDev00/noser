import { CustomBr } from "@/components/atoms/custom-br";

export default {
  phone: {
    text: "Nummer",
    number: "076 397 27 06",
    link: "tel:+41763972706",
  },
  buttons: {
    title: "Gespräch starten",
  },
  help: "Wie können wir helfen?",
  mail: {
    text: "Schreibe uns ein E-mail",
    email: "info@andrade-gipser.ch",
    link: "mailto:info@andrade-gipser.ch",
  },
  location: {
    text: "Location",
    address: "Lerchenstrasse 22, 8754 Netstal",
    link: "https://maps.app.goo.gl/RebauSjvGRukDnz7A",
  },
  categories: [
    { title: "Home", href: "/" },
    { title: "Dienstleistungen", href: "/dienstleistungen" },
    { title: "Über uns", href: "/uber-uns" },
    { title: "Kontakt", href: "/kontakt" },
  ],
  hero: {
    bg: {
      src: "/imgs/home/hero/bg.png",
      alt: "Hero Background",
      title: "Hero Background",
    },
    title: (
      <>
        Gipser- und Malerarbeiten <br /> mit höchsten Standards.
      </>
    ),
    description: (
      <>
        Erleben Sie die Qualität und Präzision, die unsere
        <br /> Arbeit auszeichnet.
      </>
    ),
    button: { title: "Kontakt", href: "/kontakt" },
    slider: [
      { src: "/imgs/slider/slider2.png", alt: "Img 01", title: "Img 01" },
      { src: "/imgs/slider/slider3.png", alt: "Img 01", title: "Img 01" },
      { src: "/imgs/slider/slider4.png", alt: "Img 01", title: "Img 01" },
      { src: "/imgs/slider/slider6.png", alt: "Img 01", title: "Img 01" },
      { src: "/imgs/slider/slider7.png", alt: "Img 01", title: "Img 01" },
      { src: "/imgs/slider/slider8.png", alt: "Img 01", title: "Img 01" },
      { src: "/imgs/slider/slider5.png", alt: "Img 01", title: "Img 01" },
      { src: "/imgs/slider/slider9.png", alt: "Img 01", title: "Img 01" },
      { src: "/imgs/slider/slider1.png", alt: "Img 01", title: "Img 01" },
      { src: "/imgs/slider/slider10.png", alt: "Img 01", title: "Img 01" },
    ],
    deals: {
      text: <>Unsere Zusammenarbeit spricht für sich</>,
      img: [
        {
          src: "/imgs/home/hero/deals.png",
          alt: "Bauunternehmung",
          title: "Deal",
        },
        {
          src: "/imgs/home/hero/gipser.png",
          alt: "gipser.png",
          title: "gipser.png",
        },
      ],
    },
  },
  services: {
    title: (
      <>
        Darin sind wir
        <br /> unschlagbar
      </>
    ),
    description: (
      <>
        Klare Leistungen, auf die Sie zählen können.
        <CustomBr byViewport="desktop" /> Entdecken Sie unsere Dienstleistungen.
      </>
    ),
    button: { title: "Mehr dazu", href: "/dienstleistungen" },
    bg: {
      src: "/imgs/home/services/bg.png",
      alt: "Services Background",
      title: "Services Background",
    },
    img: {
      desktop: {
        src: "/imgs/home/services/img.png",
        alt: "Services Image",
        title: "Services Image",
      },
      mobile: {
        src: "/imgs/home/services/mobile/img.png",
        alt: "Services Image",
        title: "Services Image",
      },
    },
    tags: [
      <>
        <span>Gipserarbeiten</span>
      </>,
      <>
        <span>Malerarbeiten</span>
      </>,
    ],
  },
  aboutUs: {
    title: (
      <>
        Wer wir sind und was
        <br /> uns antreibt
      </>
    ),
    description: (
      <>
        Vertrauen, Erfahrung und Handwerk <CustomBr byViewport="desktop" />– das sind wir.
      </>
    ),
    button: { title: "Mehr dazu", href: "/uber-uns" },
    list: [
      {
        text: (
          <>
            Wir verwenden nur hochwertige Materialien und arbeiten mit
            <CustomBr byViewport="desktop" /> Präzision, um langlebige Ergebnisse zu garantieren.
          </>
        ),
      },
      {
        text: (
          <>
            Wir glauben daran, dass ehrliche Kommunikation die Grundlage
            <CustomBr byViewport="desktop" /> für eine erfolgreiche Zusammenarbeit ist.
          </>
        ),
      },
    ],
    imgs: [
      { src: "/imgs/home/about-us/img1.png", alt: "Img 01", title: "Img 01" },
      { src: "/imgs/home/about-us/img2.png", alt: "Img 02", title: "Img 02" },
    ],
  },
  whyChooseUs: {
    title: <>Warum wir anders sind</>,
    description: (
      <>
        Unsere Werte, Ihr Vorteil: Was uns von der
        <CustomBr byViewport="desktop" /> Masse abhebt
      </>
    ),
    list: [
      {
        title: <>Höchste Qualitätsstandards</>,
        text: (
          <>
            Wir setzen auf Qualität ohne Kompromisse. Jedes Detail zählt, und wir verwenden nur die
            besten Materialien, um langlebige Ergebnisse zu gewährleisten.
          </>
        ),
        bg: "/imgs/home/why-choose-us/hover1.png",
      },
      {
        title: <>Erfahrung und Expertise</>,
        text: (
          <>
            Mit jahrzehntelanger Erfahrung im Gepäck wissen wir genau, wie wir Ihre Wünsche in die
            Tat umsetzen.
          </>
        ),
        bg: "/imgs/home/why-choose-us/hover2.png",
      },
      {
        title: <>Transparente Kommunikation</>,
        text: (
          <>
            Bei uns wissen Sie immer, woran Sie sind. Wir halten Sie in jeder Phase des Projekts auf
            dem Laufenden und stehen Ihnen für alle Fragen zur Verfügung.
          </>
        ),
        bg: "/imgs/home/why-choose-us/hover3.png",
      },
      {
        title: <>Vertrauenswürdigkeit</>,
        text: (
          <>
            Wir stehen zu unserem Wort. Pünktlichkeit und Sauberkeit sind bei uns nicht nur
            Versprechen, sondern eine Selbstverständlichkeit.
          </>
        ),
        bg: "/imgs/home/why-choose-us/hover4.png",
      },
    ],
    callAction: {
      text: (
        <>
          Erleben Sie den Unterschied. Lassen Sie <CustomBr byViewport="desktop" /> uns gemeinsam
          Ihr Projekt starten.
        </>
      ),
      img: {
        src: "/imgs/home/why-choose-us/bg.png",
        alt: "Img",
        title: "Img",
      },
      button: { title: "Jetzt Kontakt aufnehmen", href: "/kontakt" },
    },
  },
  contact: {
    title: (
      <>
        Jetzt Kontakt <CustomBr byViewport="mobile" />
        aufnehmen
      </>
    ),
    subtitle: (
      <>
        Wir sind für Sie da – Lassen Sie
        <CustomBr byViewport="mobile" /> uns Ihr Projekt
        <CustomBr byViewport="desktop" /> gemeinsam
        <CustomBr byViewport="mobile" /> besprechen
      </>
    ),

    form: {
      inputs: [
        {
          label: "Name",
          type: "text",
          name: "name",
          placeholder: "z.B. Jonn Wyss",
        },
        {
          label: "Nummer",
          type: "text",
          name: "phone",
          placeholder: "+41 00 000 00 00",
        },
        {
          label: "Email",
          name: "email",
          placeholder: "Jhon@gmail.com",
          type: "email",
        },
        {
          label: "Gewünschter Service",
          name: "message",
          placeholder: "Ich hätte gerne eine Offerte bezüglich…",
          type: "textarea",
        },
      ],
      button: "Senden",
    },
    map: <>Lerchenstrasse 22, 8754 Netstal</>,
  },
  service: {
    banner: {
      title: <>Unsere Dienstleistungen</>,
      description: <>Ihre Experten für präzise und zuverlässige Arbeit.</>,
      background: {
        src: "/imgs/service/bg.png",
        alt: "Background Header",
      },
      breadcrumb: "Dienstleistungen",
      tags: {
        content: [<>Qualität</>, <>Präzision</>],
      },
    },
  },
  content: [
    {
      title: <>Gipserarbeiten</>,
      texts: [
        {
          title: <>Innen- und Aussenputzarbeiten</>,
          content: (
            <>
              „Glatter Putz für ein perfektes Finish – innen wie aussen.“ Ob Innen- oder Aussenputz,
              wir sorgen dafür, dass Ihre Wände und Fassaden den optimalen Schutz und die gewünschte
              Optik erhalten. Unser Team verwendet hochwertige Materialien und moderne Techniken, um
              glatte Oberflächen zu schaffen, die sowohl funktional als auch ästhetisch ansprechend
              sind.
            </>
          ),
        },
        {
          title: <>Trockenbau</>,
          content: (
            <>
              „Flexible Raumgestaltung mit stabilen Leichtbauwänden.“ Der Trockenbau bietet flexible
              Möglichkeiten zur Raumgestaltung und Modernisierung. Ob Trennwände, abgehängte Decken
              oder spezielle Designlösungen – mit stabilen Leichtbauwänden gestalten wir Räume ganz
              nach Ihren individuellen Vorstellungen, schnell und effizient.
            </>
          ),
        },
        {
          title: <>Stuck- und Dekorationsarbeiten</>,
          content: (
            <>
              „Kreative Stuckelemente für ein stilvolles Ambiente.“ Stuckarbeiten verleihen jedem
              Raum eine besondere Note. Von klassischen Stilelementen bis hin zu modernen Designs
              setzen wir auf kreative Akzente, die das Gesamtbild Ihrer Innenräume aufwerten. Unsere
              handwerkliche Präzision garantiert dabei, dass Ihre Wände und Decken zu einem echten
              Blickfang werden.
            </>
          ),
        },
      ],
      video: {
        src: "/videos/video01.mp4",
        type: "video/mp4",
      },
      img: {
        src: "/imgs/service/img-content01.png",
        alt: "Img 01",
        title: "Img 01",
        css: `
          height: 35.2rem;
        `,
      },
    },
    {
      title: <>Malerarbeiten</>,
      texts: [
        {
          title: <>Fassadenarbeiten</>,
          content: (
            <>
              „Langlebiger Schutz und ansprechende Gestaltung Ihrer Fassade.“ Ihre Fassade ist nicht
              nur das Gesicht Ihres Gebäudes, sondern auch ein wichtiger Schutz vor
              Witterungseinflüssen. Mit hochwertigen Fassadenfarben und -beschichtungen sorgen wir
              dafür, dass Ihr Haus nicht nur gut aussieht, sondern auch langfristig geschützt ist –
              gegen Feuchtigkeit, UV-Strahlung und andere Umwelteinflüsse.
            </>
          ),
        },
        {
          title: <>Malerarbeiten</>,
          content: (
            <>
              „Farbe, die Räume zum Leben erweckt – innen und aussen.“ Egal, ob Sie Ihre Wohnräume
              oder Fassaden neu gestalten möchten – unsere professionellen Malerarbeiten verleihen
              jedem Projekt den gewünschten Charakter. Wir setzen Ihre Vorstellungen in die Tat um
              und schaffen durch gekonnte Farbwahl und Präzision ein harmonisches Gesamtbild, das
              Ihren Räumen oder Ihrer Fassade Leben einhaucht.
            </>
          ),
        },
      ],
      video: {
        src: "/videos/video02.mp4",
        type: "video/mp4",
      },
      img: {
        src: "/imgs/service/img-content02.png",
        alt: "Img 02",
        title: "Img 02",
        css: `
          height: 27.4rem;
        `,
      },
    },
  ],
  gallery: {
    title: <>Unsere Arbeiten im Überblick</>,
    subtitle: (
      <>
        Entdecken Sie unsere abgeschlossenen Projekte und lassen Sie sich
        <CustomBr byViewport="desktop" /> von der Qualität unserer Handwerkskunst inspirieren
      </>
    ),
    icon: {
      src: "/imgs/service/brush.png",
      alt: "Brush",
      title: "Brush",
    },
  },
  aboutUsContent: {
    title: <>Unsere Geschichte</>,
    description: (
      <>
        Unsere Wurzeln liegen tief im Handwerk. Mit jahrzehntelanger Erfahrung als Gipser und Maler
        haben wir uns entschieden, unseren eigenen Weg zu gehen und die Andrade Gipser + Maler GmbH
        zu gründen. Was uns von Anfang an angetrieben hat, ist der Anspruch, stets das Beste zu
        liefern – für jeden Kunden und bei jedem Projekt.
      </>
    ),
    list: [
      {
        title: <>Qualität</>,
        text: (
          <>
            Wir verwenden nur hochwertige Materialien und arbeiten mit Präzision, um langlebige
            Ergebnisse zu garantieren.
          </>
        ),
        icon: {
          src: "/svgs/crown.svg",
          alt: "Quality",
          title: "Quality",
        },
      },
      {
        title: <>Transparenz</>,
        text: (
          <>
            Wir glauben daran, dass eine transparente Kommunikation die Grundlage für eine
            erfolgreiche Zusammenarbeit ist.
          </>
        ),
        icon: {
          src: "/svgs/stars.svg",
          alt: "Transparenz",
          title: "Transparenz",
        },
      },
      {
        title: <>Zuverlässigkeit</>,
        text: <>Pünktlichkeit, Sorgfalt und saubere Arbeit sind für uns selbstverständlich.</>,
        icon: {
          src: "/svgs/check.svg",
          alt: "Zuverlässigkeit",
          title: "Zuverlässigkeit",
        },
      },
      {
        title: <>Vertrauen</>,
        text: (
          <>
            Unsere Kunden können sich darauf verlassen, dass wir zu unserem Wort stehen und jedes
            Projekt mit Engagement und Fachwissen angehen.
          </>
        ),
        icon: {
          src: "/svgs/security.svg",
          alt: "Vertrauen",
          title: "Vertrauen",
        },
      },
    ],

    imgs: {
      small: {
        src: "/imgs/uber-uns/small.png",
        alt: "Small",
        title: "Small",
      },
      big: {
        src: "/imgs/uber-uns/big.png",
        alt: "Big",
        title: "Big",
      },
    },
  },
  team: {
    images: [
      {
        src: "/imgs/uber-uns/team/unser-team.png",
        alt: "Unser Team",
        title: "Unser Team",
      },
      {
        src: "/imgs/uber-uns/team/unsere-philosophie.png",
        alt: "Unsere Philosophie",
        title: "Unsere Philosophie",
      },
    ],
    content: [
      {
        title: <>Unser Team</>,
        content: (
          <>
            Wir sind stolz auf unser engagiertes Team, das jeden Tag sein Bestes gibt, um Ihre
            Projekte in höchster Qualität umzusetzen. Bei Andrade Gipser + Maler GmbH setzen wir auf
            ein starkes Miteinander, bei dem Erfahrung und Leidenschaft Hand in Hand gehen. Unser
            Team besteht aus erfahrenen Fachleuten, die ihr Handwerk verstehen und mit Leidenschaft
            und Präzision an jedes Projekt herangehen.
          </>
        ),
      },
      {
        title: <>Unsere Philosophie</>,
        content: (
          <>
            Gemeinsam schaffen wir mehr. Jeder in unserem Team bringt individuelle Stärken und
            jahrelange Expertise mit, um Ihre Visionen in die Realität umzusetzen. Wir glauben
            daran, dass grossartige Ergebnisse nur durch Teamarbeit entstehen, und genau das ist
            unser Ansatz bei Andrade Gipser + Maler GmbH.
          </>
        ),
      },
      {
        title: <>Warum unser Team?</>,
        list: [
          {
            title: <>Erfahrung und Kompetenz</>,
            text: (
              <>
                Unsere Mitarbeiter haben nicht nur die nötige Qualifikation, sondern auch die
                Leidenschaft für das Handwerk.
              </>
            ),
          },
          {
            title: <>Verlässlichkeit und Engagement</>,
            text: (
              <>
                Unser Team steht für Qualität und Sorgfalt – wir behandeln jedes Projekt so, als
                wäre es unser eigenes.
              </>
            ),
          },
          {
            title: <>Kontinuierliche Weiterbildung</>,
            text: (
              <>
                Wir legen grossen Wert darauf, dass unser Team stets auf dem neuesten Stand der
                Technik ist, um Ihnen die bestmöglichen Ergebnisse zu liefern.
              </>
            ),
          },
        ],
      },
    ],
    members: [
      {
        photo: {
          src: "/imgs/uber-uns/team/01.png",
          alt: "Person 01",
          title: "Person 01",
        },
        name: "Raimundo Santos",
        text: "Gipser",
      },
      {
        photo: {
          src: "/imgs/uber-uns/team/02.png",
          alt: "Person 02",
          title: "Person 02",
        },
        name: "Diogo Almada",
        text: "Gipser",
      },
      {
        photo: {
          src: "/imgs/uber-uns/team/03.png",
          alt: "Person 03",
          title: "Person 03",
        },
        name: "Lizuarte Ornelas",
        text: "Gipser",
      },
      {
        photo: {
          src: "/imgs/uber-uns/team/04.png",
          alt: "Person 04",
          title: "Person 04",
        },
        name: "Camilo Almada",
        text: "Gipser",
      },
    ],
  },
  footer: {
    title: (
      <>
        Wer wir sind und was uns
        <CustomBr byViewport="desktop" /> antreibt
      </>
    ),
    categoriesText: "Navigation ",
    servicesText: "Unsere Leistungen",
    description: (
      <>
        Vertrauen, Erfahrung und <CustomBr byViewport="desktop" />
        Handwerk – das sind wir.
      </>
    ),
    copyrigth: {
      text: <>Copyright © 2024 Andrade Gisper + Maler GmbH</>,
      fiber: (
        <>
          Mit 💚 entwickelt von <a href="https://www.fiberweb.ch/">FiberWeb.ch</a>
        </>
      ),
    },
    categories: [
      "Innen- und Aussenputzarbeiten",
      "Trockenbau",
      "Stuck- und Dekorationsarbeiten",
      "Fassadenarbeiten",
      "Malerarbeiten",
    ],
  },
};

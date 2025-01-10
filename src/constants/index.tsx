import { CustomBr } from "@/components/atoms/custom-br";
import { FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default {
  phone: {
    text: "Nummer",
    footer: "Phone",
    number: "055 648 07 60",
    link: "tel:+41763972706",
  },
  buttons: {
    title: "Gespräch starten",
  },
  help: "Wie können wir helfen?",
  mail: {
    text: "Schreibe uns ein E-mail",
    footer: "Email",
    email: "info@nosertreuhand.ch",
    link: "mailto:info@nosertreuhand.ch",
  },
  text: <>Korki 1, 8752 Näfels</>,
  location: {
    text: "Location",
    address: "Lerchenstrasse 22, 8754 Netstal",
    link: "https://maps.app.goo.gl/RebauSjvGRukDnz7A",
  },
  categories: [
    { title: "Home", href: "/" },
    { title: "Privatkunden", href: "/privatkunden" },
    { title: "Unternehmen", href: "/unternehmen" },
    { title: "Nützliche Ressourcen", href: "/nutzliche-ressourcen" },
    { title: "Impressum", href: "/impressum" },
    { title: "Über uns", href: "/uber-uns" },
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
  privatkunden: {
    banner: {
      title: (
        <>
          Sicherheit in
          <CustomBr byViewport="mobile" /> jedem
          <CustomBr byViewport="mobile" /> finanziellen
          <br /> Schritt
        </>
      ),
      description: (
        <>
          Unsere Unterstützung reicht von
          <CustomBr byViewport="mobile" /> einfacher Buchhaltung bis hin zur
          <CustomBr byViewport="mobile" /> detaillierten Steuerplanung
          <CustomBr byViewport="desktop" /> und
          <CustomBr byViewport="mobile" /> schafft in jedem Bereich eine
          <CustomBr byViewport="mobile" /> solide Grundlage für Ihre
          <CustomBr byViewport="mobile" /> finanziellen Entscheidungen.
        </>
      ),
      background: {
        src: "/imgs/service/bg.png",
        alt: "Background Header",
      },
      breadcrumb: "Dienstleistungen",
      tags: {
        content: [<>Qualität</>, <>Präzision</>],
      },
    },
    accounting: {
      list: [
        {
          title: "Buchhaltung",
          content: (
            <>
              Mit präziser und durchdachter Buchhaltung legen wir die Grundlage für Ihre klaren
              Entscheidungen. Von der täglichen Finanzübersicht bis zum umfassenden Jahresabschluss
              – wir sorgen dafür, dass jede Zahl in Ihrem Unternehmen stimmt. Unser Ziel ist es,
              Ihre Buchhaltung als strategischen Vorteil zu gestalten, der Transparenz und
              Gelassenheit schafft. Durch die Kombination aus digitalem Know-how und menschlicher
              Expertise machen wir Finanzprozesse klar und leicht nachvollziehbar, sodass Sie mit
              Ruhe und Fokus auf das Wachstum Ihres Unternehmens blicken können.
            </>
          ),
        },
        {
          title: "Steuerberatung",
          content: (
            <>
              Wir wissen, dass Steuerfragen oft mit Unsicherheiten verbunden sind. Unsere Experten
              analysieren Ihre Finanzen und finden Wege, Ihre Steuerlast zu optimieren –
              fristgerecht und ohne Stress. Ob Steuerplanung oder Steuererklärung, wir erledigen
              alles im Hintergrund, damit Sie sich sicher fühlen und auf Ihre Finanzen vertrauen
              können. Mit uns haben Sie einen Steuerberater an Ihrer Seite, der stets auf dem
              neuesten Stand ist und Ihre Interessen aktiv vertritt.
            </>
          ),
        },
        {
          title: "Nachfolgeregelungen und Erbschaftsplanung",
          content: (
            <>
              Die Planung für die nächste Generation braucht Fingerspitzengefühl und Vertrauen. Wir
              sind da, um sicherzustellen, dass Ihr Lebenswerk und Ihre Werte in die richtigen Hände
              übergehen – genau so, wie Sie es sich vorstellen. Schritt für Schritt begleiten wir
              Sie durch diesen Prozess und sind Ihr Ansprechpartner für jede Frage, damit Sie
              beruhigt in die Zukunft blicken können. Mit uns haben Sie jemanden, der Ihre Anliegen
              ernst nimmt und für eine reibungslose und persönliche Übergabe sorgt.
            </>
          ),
        },
      ],
      img: {
        src: "/imgs/privatkunden/accounting/img.png",
        alt: "Accounting",
      },
    },
    content: {
      img: [
        {
          src: "/imgs/privatkunden/intro/article1.png",
          alt: "Img 01",
        },
      ],
      text: (
        <>
          <h2>Unsere Philosophie</h2>

          <p>
            Finanzen können herausfordernd sein, doch wir machen es Ihnen einfach und verständlich,
            sodass Sie sich entspannt zurücklehnen können. Ob Steuerplanung, Buchhaltung oder
            Nachlassfragen – wir sorgen dafür, dass Sie stets den Überblick behalten und mit ruhigem
            Gewissen den Kopf für das Wichtige frei haben. Mit smarten digitalen Tools und
            umfassender Erfahrung gestalten wir Ihre Finanzen transparent und leicht nachvollziehbar
            – für Entscheidungen, die Ihnen Sicherheit geben. Diskretion und Verlässlichkeit prägen
            unsere Arbeit, damit Sie sich sicher fühlen und wissen, dass Ihre Angelegenheiten bei
            uns in guten Händen sind.
          </p>
        </>
      ),
    },
    advantages: {
      bg: {
        src: "/imgs/privatkunden/benefits.png",
        alt: "Background",
      },
      title: <>Unsere Vorteile</>,
      list: [
        {
          title: (
            <>
              Kein Zahlenstress, sondern
              <CustomBr byViewport="desktop" /> klare Struktur
            </>
          ),
          text: (
            <>
              Wir übernehmen alle finanziellen
              <CustomBr byViewport="desktop" /> Aufgaben – von der Steuererklärung bis
              <CustomBr byViewport="desktop" /> zur Nachlassplanung. Während wir den
              <CustomBr byViewport="desktop" /> Weg freimachen, gewinnen Sie wertvolle
              <CustomBr byViewport="desktop" /> Zeit und Ruhe, um sich auf das
              <CustomBr byViewport="desktop" /> Wesentliche zu konzentrieren.
            </>
          ),
        },
        {
          title: (
            <>
              Volle Transparenz für Ihre
              <CustomBr byViewport="desktop" /> Sicherheit
            </>
          ),
          text: (
            <>
              Wir verwandeln komplexe Finanzfragen in
              <CustomBr byViewport="desktop" /> klare und leicht verständliche Lösungen,
              <CustomBr byViewport="desktop" /> damit Sie Ihre Finanzen mühelos im Griff
              <CustomBr byViewport="desktop" /> behalten. Verständliche Kommunikation
              <CustomBr byViewport="desktop" /> und absolute Transparenz sind unsere
              <CustomBr byViewport="desktop" /> Garantie.
            </>
          ),
        },
        {
          title: (
            <>
              Zuverlässigkeit, die Sie
              <CustomBr byViewport="desktop" /> spüren
            </>
          ),
          text: (
            <>
              Vom ersten Kontakt an bis zur langfristigen
              <CustomBr byViewport="desktop" /> Betreuung gestalten wir unsere
              <CustomBr byViewport="desktop" /> Zusammenarbeit transparent und
              <CustomBr byViewport="desktop" /> vertrauensvoll. Ihre Anliegen sind nicht nur
              <CustomBr byViewport="desktop" /> in sicheren Händen – sie sind bei
              <CustomBr byViewport="desktop" /> Menschen, denen Ihre Ziele wirklich am
              <CustomBr byViewport="desktop" /> Herzen liegen.
            </>
          ),
        },
      ],
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
    share: [
      {
        href: "https://web.facebook.com/",
        icon: FaFacebookF,
        title: "Facebook",
      },
      {
        href: "https://www.linkedin.com/company/treuhand-suisse/",
        icon: FaInstagram,
        title: "Instagram",
      },
    ],
    time: {
      text: "Öffnungszeiten",
      days: [
        <>
          <b>Montag</b> 08:00–17:00{" "}
        </>,
        <>
          <b>Dienstag</b> 08:00–17:00{" "}
        </>,
        <>
          <b>Mittwoch</b> 08:00–17:00{" "}
        </>,
        <>
          <b>Donnerstag</b> 08:00–17:00{" "}
        </>,
        <>
          <b>Freitag</b> 08:00–16:00{" "}
        </>,
      ],
    },
    copyrigth: {
      text: (
        <>
          ©Copyright 2024 <b>Noser Treuhand</b>
        </>
      ),
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

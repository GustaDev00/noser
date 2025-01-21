import { CustomBr } from "@/components/atoms/custom-br";

export default {
  title: <>Das Team hinter Noser Treuhand GmbH</>,
  description: (
    <>
      Erfahren, engagiert und stets an Ihrer Seite für finanzielle
      <CustomBr byViewport="desktop" /> Klarheit und Sicherheit
    </>
  ),
  team: [
    {
      photo: {
        src: "/imgs/uber-uns/team/1.png",
        alt: "Team Member 01",
      },
      name: "Cédric Noser",
      text: (
        <>
          Geschäftsführer
          <br /> Dipl. Treuhand-Expert FL NDS Bringt Klarheit und Weitblick in Ihre Finanzen.
        </>
      ),
    },
    {
      photo: {
        src: "/imgs/uber-uns/team/2.png",
        alt: "Team Member 01",
      },
      name: "Dominic Noser",
      text: (
        <>
          Sachbearbeiter
          <br /> Strukturiert und engagiert für einen reibungslosen Ablauf.
        </>
      ),
    },
    {
      photo: {
        src: "/imgs/uber-uns/team/3.png",
        alt: "Team Member 01",
      },
      name: "Ursula Noser",
      text: (
        <>
          Sachbearbeiterin
          <br /> Aufmerksam und zuverlässig für Ihre Anliegen da.
        </>
      ),
    },
  ],
};

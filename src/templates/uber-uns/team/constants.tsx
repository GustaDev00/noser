import { CustomBr } from "@/components/atoms/custom-br";

export default {
  title: <>Das Team hinter Noser Treuhand</>,
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
          Geschäftsführung, Dipl. Treuhand-Experte
          <CustomBr byViewport="desktop" /> FL NDS Bringt Klarheit und Weitblick in Ihre
          <CustomBr byViewport="desktop" /> Finanzen.
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
          Sachbearbeiter Strukturiert und engagiert
          <CustomBr byViewport="desktop" /> für einen reibungslosen Ablauf.
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
          Sachbearbeiterin Aufmerksam und
          <CustomBr byViewport="desktop" /> zuverlässig für Ihre Anliegen da.
        </>
      ),
    },
  ],
};

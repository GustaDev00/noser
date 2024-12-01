import { NutzlichRessourcenTemplate } from "@/templates/nutzliche-ressourcen";
import { type Metadata } from "next";
import { type ReactNode } from "react";

export const metadata: Metadata = {
  title: "Nützliche Ressourcen",
  description: "Nützliche Ressourcen",
};

const NutzlichRessourcen = (): ReactNode => {
  return <NutzlichRessourcenTemplate />;
};

export default NutzlichRessourcen;

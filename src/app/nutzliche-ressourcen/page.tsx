import { NutzlichRessourcenTemplate } from "@/templates/nutzliche-ressourcen";
import { type Metadata } from "next";
import { type ReactNode } from "react";

export const metadata: Metadata = {
  title: "Links/Downloads",
  description: "Links/Downloads",
};

const NutzlichRessourcen = (): ReactNode => {
  return <NutzlichRessourcenTemplate />;
};

export default NutzlichRessourcen;

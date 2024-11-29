import { PrivatkundenTemplate } from "@/templates/privatkunden";
import { type Metadata } from "next";
import { type ReactNode } from "react";

export const metadata: Metadata = {
  title: "Privatkunden",
  description: "Privatkunden",
};

const Privatkunden = (): ReactNode => {
  return <PrivatkundenTemplate />;
};

export default Privatkunden;

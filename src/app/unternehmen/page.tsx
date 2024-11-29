import { UnternehmenTemplate } from "@/templates/unternehmen";
import { type Metadata } from "next";
import { type ReactNode } from "react";

export const metadata: Metadata = {
  title: "Unternehmen",
  description: "Unternehmen",
};

const Unternehmen = (): ReactNode => {
  return <UnternehmenTemplate />;
};

export default Unternehmen;

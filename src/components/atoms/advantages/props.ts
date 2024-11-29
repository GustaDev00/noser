import { ReactNode } from "react";

export interface AdvantagesProps {
  title: ReactNode;
  bg: {
    src: string;
    alt: string;
  };
  list: {
    title: ReactNode;
    text: ReactNode;
  }[];
}

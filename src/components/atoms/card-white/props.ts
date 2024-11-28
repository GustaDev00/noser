import { ReactNode } from "react";

export interface CardWhiteProps {
  icon: ReactNode;
  title: ReactNode;
  description: ReactNode;
  link?: {
    href: string;
    title: string;
  };
}

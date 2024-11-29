export interface ArticleProps {
  imgs: {
    src: string;
    alt: string;
  }[];
  tag?: boolean;
  children: React.ReactNode;
  invert?: boolean;
}

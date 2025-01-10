import * as S from "./styles";
import { ButtonSwipeProps } from "./props";
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { ArrowIcon } from "@/components/svgs/arrow";

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const ButtonSwipe = ({ href, className, onClick, children, ...props }: ButtonSwipeProps) => {
  const handleClick = (
    e:
      | React.MouseEvent<HTMLAnchorElement, MouseEvent>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();

    const chatButton = document.querySelector("#chatbase-bubble-button");
    if (chatButton) {
      (chatButton as HTMLButtonElement).click();
    }
  };

  return href ? (
    <S.LinkSwipe
      className={className}
      {...(props as LinkProps)}
      href={href}
      onClick={(e) => {
        if (props.title === "Gespräch starten") {
          handleClick(e);
        }
      }}
    >
      {children} <ArrowIcon />
    </S.LinkSwipe>
  ) : (
    <S.ButtonSwipe
      className={className}
      {...(props as ButtonProps)}
      onClick={(e) => {
        handleClick(e);
      }}
    >
      {children} <ArrowIcon />
    </S.ButtonSwipe>
  );
};

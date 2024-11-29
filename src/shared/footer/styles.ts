import styled, { css } from "styled-components";
import { Logo as _Logo } from "@/components/atoms/logo";
import { Wrapper as _Wrapper } from "@/styles/components/wrapper";
import { mediaMaxWidth } from "@/utils/media-query";
import { Mail as _Mail } from "@/components/svgs/mail";
import { Phone as _Phone } from "@/components/svgs/phone";
import { TitleSmall } from "@/styles/components/titles";
import { SubtitleDark } from "@/styles/components/subtitle";
import _Link from "next/link";
import { ButtonSwipe } from "@/components/atoms/button-swipe";
import { ArrowUpIcon } from "@/components/svgs/arrow-up";

export const Cta = styled.div`
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 200%;
    height: 100%;
    background: url("./imgs/footer/bg.png") repeat-x;
    background-size: cover;
    animation: moveBackground 120s linear infinite;

    ${mediaMaxWidth("mobile")`
      animation-duration: 30s;
    `}
  }

  @keyframes moveBackground {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-50%);
    }
  }
`;

export const WrapperCta = styled(_Wrapper)`
  gap: 12rem;
  justify-content: center;
  align-items: center;

  ${mediaMaxWidth("mobile")`
    flex-direction: column;
    align-items: flex-start;
    padding: 8rem 3.2rem;
    gap: 2.4rem;
  `}
`;

export const TitleCta = styled.h2`
  color: #000;
  font-family: var(--manrope);
  font-size: 4.6rem;
  font-weight: 700;

  ${mediaMaxWidth("mobile")`
    font-size: 4.2rem;
  `}
`;

export const SubtitleCta = styled.p`
  color: #444;
  font-family: var(--manrope);
  font-size: 2.6rem;
  font-weight: 400;
  line-height: 150%;

  ${mediaMaxWidth("mobile")`
    font-size: 2.2rem;
  `}
`;

export const ButtonCta = styled(ButtonSwipe)`
  background: #0d4d9b;
  color: #fff;
  padding: 1.5rem 4rem;

  svg path {
    fill: #fff;
  }
`;

export const ButtonUp = styled.button`
  top: -4.2rem;
  right: 8.5rem;
  position: absolute;
  width: 8.4rem;
  height: 8.4rem;
  border: 0.3rem solid #0d4d9b;
  background: #fff;
  border-radius: 50%;
  z-index: 20;

  ${mediaMaxWidth("mobile")`
    width: 6.4rem;
    height: 6.4rem;
    right: 3rem;
    top: 80%;
  `}
`;

export const ArrowUp = styled(ArrowUpIcon)``;

export const Footer = styled.footer`
  position: relative;
`;

export const Wrapper = styled(_Wrapper)`
  background: #0d4d9b;
  padding: 8rem 12rem;
  gap: 12rem;
  align-items: center;

  ${mediaMaxWidth("mobile")`
    flex-direction: column;
    align-items: flex-start;
    gap: 6.4rem;
    padding: 8rem 2.2rem;
  `}
`;

export const Column = styled.div<{ $first?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 3.4rem;
  margin-right: ${({ $first }) => ($first ? "16.1rem" : "0")};

  ${mediaMaxWidth("mobile")`
    margin-right: 0;
  `}
`;

export const Line = styled.div``;

export const TitleLine = styled.h3`
  color: #fff;
  font-family: var(--manrope);
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 2.4rem;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const Item = styled.li`
  color: #ccc;
  font-family: var(--manrope);
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2.4rem;
`;

export const Link = styled.a`
  font-size: inherit;
`;

export const Info = styled.div`
  background: #063773;
  padding: 3.8rem 12rem;
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.white};
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 140%;

  ${mediaMaxWidth("mobile")`
    padding: 3.8rem 2.2rem;
    flex-direction: column;
    align-items: flex-start;
    font-size: 1.6rem;
    gap: 1.7rem;
  `}
`;

export const SocialShare = styled.div`
  display: flex;
  gap: 2.4rem;

  svg {
    width: 2.4rem;
    height: 2.4rem;
    fill: #fff;
  }
`;

export const Copy = styled.p``;

export const Agency = styled.p`
  span {
    font-weight: 700;
  }
`;

export const Logo = styled(_Logo)``;

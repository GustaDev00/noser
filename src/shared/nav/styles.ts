import { ButtonSwipe } from "@/components/atoms/button-swipe";
import { Logo as _Logo } from "@/components/atoms/logo";
import { Mail as _Mail } from "@/components/svgs/mail";
import { Menu as _Menu } from "@/components/svgs/menu";
import { Phone as _Phone } from "@/components/svgs/phone";
import { mediaMaxWidth } from "@/utils/media-query";
import _Link from "next/link";
import { styled } from "styled-components";

export const Header = styled.header<{ $impressum: boolean }>`
  width: 100%;
  position: ${({ $impressum }) => ($impressum ? "relative" : "absolute")};
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ $impressum }) => ($impressum ? "#1D4E89" : "transparent")};
  padding: 3rem 12rem;
  z-index: 3;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    padding: 2rem 7.6rem;
  `}

  ${({ $impressum }) => mediaMaxWidth("mobile")`
    top: ${$impressum ? "0" : "1.5rem"};
    padding: 1rem 2rem;
  `}
`;

export const Logo = styled(_Logo)``;

export const Nav = styled.nav``;

export const List = styled.ul`
  display: flex;
  align-items: center;
  gap: 3.4rem;
  color: #fff;
  font-family: var(--manrope);
  font-size: 2.2rem;
  font-weight: 400;
  line-height: 3.4rem;
  letter-spacing: -0.1113rem;

  ${({ theme }) => mediaMaxWidth("isMobileOrTabletVertical")`
    color: ${theme.black};
    flex-direction: column;
    font-size: 3rem;
    line-height: 4.2rem;
    letter-spacing: -0.02rem;
  `}

  ${mediaMaxWidth("mobile")`
    font-size: 1.8rem;
    line-height: 1.8rem;
  `}
`;

export const Item = styled.li<{ $active: boolean }>`
  cursor: pointer;
  position: relative;
  transition: opacity 0.4s ease;

  &:hover {
    opacity: 0.7;
  }
`;

export const Link = styled(_Link)``;

export const Chat = styled(ButtonSwipe)``;

export const Button = styled.button`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  cursor: pointer;
  position: relative;
  top: 0.5rem;
`;

export const MenuLine = styled.div`
  background: #fff;
  height: 0.4rem;
  border-radius: 2rem;

  &:first-child {
    width: 1.55rem;
    align-self: flex-end;
  }

  &:nth-child(2) {
    width: 3.61rem;
  }

  &:last-child {
    width: 1.55rem;
  }
`;

export const MenuIcon = styled(_Menu)``;

export const Modal = styled.div`
  position: absolute;
  width: 80%;
  height: 100%;
  background: ${({ theme }) => theme.white};
  transition: right 0.4s ease;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("/imgs/uber-uns/vision/background.png") no-repeat bottom;
    background-size: contain;
    z-index: 1;

    ${mediaMaxWidth("mobile")`
      background-size: cover;
    `}
  }
`;

export const Wrapper = styled.div`
  position: relative;
  padding: 2.4rem 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 2;
`;

export const HeaderModal = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 0rem 3rem 1.8rem;

  &::before {
    position: absolute;
    content: "";
    left: 0;
    bottom: 0;
    height: 0.1rem;
    width: 100%;
    background: ${({ theme }) => theme.black01};
  }
`;

export const TextModal = styled.p`
  color: ${({ theme }) => theme.black};
  font-size: 2.4rem;
  font-weight: 600;
  line-height: 141.667%;
  letter-spacing: -0.1214rem;
`;

export const Container = styled.div`
  padding: 0rem 3rem;
`;

export const Footer = styled.div`
  padding: 0 3rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const TitleFooter = styled.h3`
  color: ${({ theme }) => theme.black};
  font-size: 2rem;
  font-weight: 700;
  line-height: 110%;
  margin-bottom: 2.4rem;
`;

export const TextFooter = styled.p`
  color: ${({ theme }) => theme.eerieBlackHalf};
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 140%;
  display: flex;
  gap: 1rem;
  align-items: center;

  a {
    margin-top: 0.6rem;
  }
  svg path {
    fill: ${({ theme }) => theme.eerieBlackHalf};
  }
`;

export const LinkFooter = styled.a`
  color: ${({ theme }) => theme.eerieBlack};
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 140%;
`;

export const ButtonFooter = styled(ButtonSwipe)``;

export const Line = styled.div`
  height: 0.1rem;
  width: 100%;
  background: ${({ theme }) => theme.black01};
`;

export const Close = styled.button`
  width: 3.5rem;
  height: 3.5rem;

  &:before {
    content: "";
    display: block;
    width: 3.5rem;
    height: 3.5rem;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='35' height='35' viewBox='0 0 35 35' fill='none'%3E%3Ccircle cx='17.5' cy='17.5' r='17.5' fill='%23EFEFEF'/%3E%3Cpath d='M17.364 15.95L22.314 11L23.728 12.414L18.778 17.364L23.728 22.314L22.314 23.728L17.364 18.778L12.414 23.728L11 22.314L15.95 17.364L11 12.414L12.414 11L17.364 15.95Z' fill='%23BCBCBC'/%3E%3C/svg%3E");
    background-size: contain;
  }
`;

export const Black = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.black03};
`;

export const Overlay = styled.div<{ $open: boolean }>`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 20;
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  visibility: ${({ $open }) => ($open ? "visible" : "hidden")};
  transition: opacity 0.4s ease, visibility 0.4s ease;

  ${Modal} {
    right: ${({ $open }) => ($open ? "0" : "-100%")};
  }

  @supports (-webkit-touch-callout: none) {
    height: 100svh; /* Ajusta para Safari */
  }
`;

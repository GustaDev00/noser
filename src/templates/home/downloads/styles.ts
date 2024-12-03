import { css, styled } from "styled-components";
import { DownloadIcon as _DownloadIcon } from "@/components/svgs/downloads";
import { ArrowUpIcon as _ArrowUpIcon } from "@/components/svgs/arrow-up";
import { LazyImage } from "@/components/atoms/lazy-image";
import { ButtonSwipe } from "@/components/atoms/button-swipe";
import { mediaMaxWidth } from "@/utils/media-query";
import { GrFormNextLink } from "react-icons/gr";

export const Downloads = styled.section``;

export const Wrapper = styled.div`
  display: flex;
  gap: 9.9rem;
  padding: 2rem 14.1rem 9rem 0;

  ${mediaMaxWidth("mobile")`
    flex-direction: column;
    padding: 2.6rem 1.2rem;
  `}
`;

export const Content = styled.div`
  position: relative;
`;

export const Bg = styled(LazyImage)`
  width: 98.2rem;
  height: 89.5rem;
  object-fit: cover;

  ${mediaMaxWidth("mobile")`
    width: 100%;
    height: 85rem;
  `}
`;

export const Article = styled.article`
  padding: 12rem 9.2rem;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  ${mediaMaxWidth("mobile")`
    padding: 12rem 2rem 7.7rem;
    width: 100%;
  `}
`;

export const Title = styled.h2`
  color: #fff;
  font-family: var(--manrope);
  font-size: 7.4rem;
  font-weight: 500;
  line-height: 10.7rem;
  letter-spacing: -0.3744rem;

  ${mediaMaxWidth("mobile")`
    font-size: 3.8rem;
    line-height: 5.9rem;
    letter-spacing: -0.2125rem;
  `}
`;

export const Description = styled.p`
  color: #cecece;
  font-size: 3rem;
  font-weight: 300;
  line-height: 4.6rem;
  letter-spacing: -0.0003rem;
  margin: 6.2rem 0;

  ${mediaMaxWidth("mobile")`
    font-size: 2.2rem;
    line-height: 4.6rem;
    letter-spacing: -0.0002rem;
  `}
`;

export const Button = styled(ButtonSwipe)``;

export const Container = styled.div`
  position: relative;
  width: 100%;

  ${mediaMaxWidth("mobile")`
    height: 70rem;
  `}
`;

export const ButtonSlide = styled.button<{ $down?: boolean }>`
  width: 5rem;
  height: 5rem;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 12;

  ${({ $down }) =>
    $down &&
    css`
      bottom: 0;

      svg {
        transform: rotate(${$down ? "180deg" : "0"});
      }

      ${mediaMaxWidth("mobile")`
        bottom: -4%;
      `}
    `}
`;

export const ArrowUpIcon = styled(_ArrowUpIcon)``;

export const Slide = styled.div`
  position: relative;
  height: 100%;
  overflow: hidden;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 69.9rem;
    height: 10rem;
    background: linear-gradient(180deg, #f5f5f5 0%, rgba(237, 239, 241, 0.15) 100%);
    z-index: 10;

    ${mediaMaxWidth("mobile")`
      width: 100%;
    `}
  }

  &::after {
    top: unset;
    height: 20rem;
    bottom: 0;
    transform: rotate(180deg);

    ${mediaMaxWidth("mobile")`
      bottom: 0;
    `}
  }
`;

export const List = styled.ul`
  top: 0%;
  width: 100%;
  position: absolute;
  transition: top 0.4s ease;
`;

export const Item = styled.li`
  padding: 3.4rem 0;
  width: 100%;
  border-bottom: 0.1rem solid rgba(0, 0, 0, 0.2);
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;

  color: #292929;
  font-family: var(--manrope);
  font-size: 2.2rem;
  font-weight: 300;
  line-height: 5.3rem;
  letter-spacing: -0.0002rem;

  ${mediaMaxWidth("mobile")`
    font-size: 2rem;
    text-align: center;
    justify-content: center;
  `}
`;

export const Text = styled.p`
  text-decoration: underline;
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4.2rem;
  height: 4.2rem;
  border-radius: 2.1rem;
  border: 0.1rem solid rgba(29, 78, 137, 0.4);

  ${mediaMaxWidth("mobile")`
    display: none;
  `}
`;

export const DownloadIcon = styled(GrFormNextLink)`
  width: 2rem;
  height: 2rem;
  color: #1d4e89;
  transform: rotate(-45deg);
`;

import styled, { css } from "styled-components";
import { ButtonSwipe } from "../button-swipe";
import { ArrowIcon } from "@/components/svgs/arrow";
import { LazyImage } from "../lazy-image";
import { mediaMaxWidth } from "@/utils/media-query";

export const Accounting = styled.div``;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5.6rem;
  padding: 0 25.5rem 12.9rem 7.8rem;

  ${mediaMaxWidth("mobile")`
    padding: 0 1.2rem 7rem;
    gap: 4.8rem;
  `}
`;

export const Intro = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${mediaMaxWidth("mobile")`
    flex-direction: column;
    align-items: flex-start;
    gap: 0rem;
  `}
`;

export const Title = styled.h2`
  color: #000;
  font-family: var(--manrope);
  font-size: 6.8rem;
  font-weight: 600;
  line-height: 10.7rem;
  letter-spacing: -0.3441rem;

  ${mediaMaxWidth("mobile")`
    font-size: 4.2rem;
    letter-spacing: -0.2125rem;
  `}
`;

export const Button = styled(ButtonSwipe)`
  color: #fff;
  background: #0d4d9b;

  svg path {
    fill: #fff;
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 0.1rem;
  background: rgba(0, 0, 0, 0.18);
`;

export const Container = styled.div`
  display: flex;
  gap: 4rem;

  ${mediaMaxWidth("mobile")`
    flex-direction: column;
  `}
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  padding: 4.8rem 5.2rem 1rem;
  border-radius: 1.2rem;
  background: #fff;

  ${mediaMaxWidth("mobile")`
    padding: 4.8rem 2.7rem 3rem;
  `}
`;

export const Article = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SubTitle = styled.h3`
  color: #4f4f4f;
  font-family: var(--manrope);
  font-size: 3.4rem;
  font-weight: 400;
  line-height: 5.3rem;
  letter-spacing: -0.0003rem;

  ${mediaMaxWidth("mobile")`
    font-size: 2rem;
    line-height: 3.6rem;
    letter-spacing: -0.0002rem;
  `}
`;

export const Arrow = styled(ArrowIcon)`
  width: 3.2rem;
  height: 2.6rem;
  transition: transform 0.4s ease;
`;

export const Text = styled.div`
  margin-top: 3.2rem;
  color: #292929;
  font-family: var(--manrope);
  font-size: 2.2rem;
  font-weight: 300;
  line-height: 4.6rem;
  letter-spacing: -0.0002rem;

  ${mediaMaxWidth("mobile")`
    font-size: 1.6rem;
    line-height: 3.6rem;
  `}
`;

export const List = styled.ul``;

export const Item = styled.li<{ $active?: boolean }>`
  cursor: pointer;
  padding: 3.2rem 0;
  border-top: 0.1rem solid rgba(0, 0, 0, 0.2);
  overflow: hidden;
  max-height: 12rem;
  transition: max-height 0.4s ease;

  &:first-child {
    border-top: none;
    padding-top: 0;
    max-height: 8.2rem;
  }

  &:last-child {
    padding-bottom: 0;
  }

  ${({ $active }) =>
    $active &&
    css`
      max-height: 100rem;

      ${Arrow} {
        transform: rotate(45deg);
      }
      &:first-child {
        max-height: 100rem;
      }
    `}

  ${({ $active }) => mediaMaxWidth("mobile")`
    padding: 2.7rem 0;
    max-height: ${$active ? "100rem" : "8rem"};

    &:first-child {
      max-height: ${$active ? "100rem" : "6rem"};
    }

    &:last-child {
      max-height: ${$active ? "100rem" : "12rem"};
    }
  `}
`;

export const Link = styled.a``;

export const Image = styled(LazyImage)`
  width: 60.4rem;

  ${mediaMaxWidth("mobile")`
    width: 100%;
  `}
`;

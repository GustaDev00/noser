import styled from "styled-components";
import { LazyImage } from "../lazy-image";
import { Logo as _Logo } from "../logo";
import { mediaMaxWidth } from "@/utils/media-query";
import { Card as _Card } from "@/components/molecules/card";

export const Article = styled.div``;

export const Img = styled(LazyImage)``;

export const Wrapper = styled.div<{ $inverted?: boolean }>`
  display: flex;
  align-items: center;
  gap: 9.1rem;
  padding: ${({ $inverted }) =>
    $inverted ? "12.5rem 0 12.5rem 19.4rem" : "12.5rem 19.4rem 12.5rem 0"};
  flex-direction: ${({ $inverted }) => ($inverted ? "row-reverse" : "row")};

  img {
    border-radius: ${({ $inverted }) => ($inverted ? "0.8rem 0 0 0.8rem" : "0 0.8rem 0.8rem 0")};
  }

  ${mediaMaxWidth("mobile")`
    flex-direction: column;
    gap: 5.8rem;
    padding: 4.9rem 1.2rem;
  `}
`;

export const Card = styled(_Card)`
  position: absolute;
  left: 6.9rem;
  bottom: 3.3rem;

  ${mediaMaxWidth("mobile")`
    left: 50%;
    transform: translateX(-50%);
    bottom: 3.2rem;
  `}
`;

export const Container = styled.div`
  position: relative;

  > picture:first-of-type img {
    width: 81.6rem;
    height: 80.2rem;
    object-fit: cover;

    ${mediaMaxWidth("mobile")`
      width: 100%;
      height: 57.8rem;
      border-radius: 1.2rem;
    `}
  }
`;

export const Content = styled.div`
  h2 {
    color: #1f1f1f;
    font-family: var(--manrope);
    font-size: 6.9rem;
    font-weight: 700;
    line-height: 9.8rem;
    letter-spacing: -0.3491rem;
    margin-bottom: 7rem;

    ${mediaMaxWidth("mobile")`
      font-size: 4.2rem;
      line-height: 9.8rem;
      letter-spacing: -0.2125rem;
      margin-bottom: 4.8rem;
    `}
  }

  p {
    color: #292929;
    font-family: var(--manrope);
    font-size: 2.6rem;
    font-weight: 300;
    line-height: 5.3rem;
    letter-spacing: -0.0003rem;
  }
`;

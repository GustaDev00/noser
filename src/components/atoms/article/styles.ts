import styled from "styled-components";
import { LazyImage } from "../lazy-image";
import { Logo as _Logo } from "../logo";
import { mediaMaxWidth } from "@/utils/media-query";

export const Article = styled.div``;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 9.1rem;
  padding: 12.5rem 19.4rem 12.5rem 0;

  ${mediaMaxWidth("mobile")`
    flex-direction: column;
    gap: 5.8rem;
    padding: 4.9rem 1.2rem;
  `}
`;

export const Container = styled.div`
  position: relative;

  > picture:first-of-type img {
    width: 81.6rem;
    height: 80.2rem;
    object-fit: cover;
  }
`;

export const Img = styled(LazyImage)``;

export const Content = styled.div`
  h2 {
    color: #1f1f1f;
    font-family: var(--manrope);
    font-size: 6.9rem;
    font-weight: 700;
    line-height: 9.8rem;
    letter-spacing: -0.3491rem;

    ${mediaMaxWidth("mobile")`
      font-size: 4.2rem;
      line-height: 9.8rem;
      letter-spacing: -0.2125rem;
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

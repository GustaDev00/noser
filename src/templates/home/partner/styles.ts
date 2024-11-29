import { CardWhite } from "@/components/atoms/card-white";
import { LazyImage } from "@/components/atoms/lazy-image";
import { Wrapper as _Wrapper } from "@/styles/components/wrapper";
import { mediaMaxWidth } from "@/utils/media-query";
import styled from "styled-components";

export const Partner = styled.section`
  position: relative;

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 0.1rem;
    background: rgba(0, 0, 0, 0.18);
  }
`;

export const Wrapper = styled(_Wrapper)`
  gap: 3.7rem;
  align-items: flex-end;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    picture {
      width: 100%;
    }
  `}
`;

export const Img = styled(LazyImage)`
  width: 100%;
  height: 88.6rem;
  object-fit: cover;
  object-position: top;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    border-radius: 0 0 1rem 1rem;
  `}

  ${mediaMaxWidth("mobile")`
    height: 45.5rem;
    border-radius: 1rem;
  `}
`;

export const Content = styled.div``;

export const Title = styled.h2`
  color: #1f1f1f;
  font-family: var(--manrope);
  font-size: 6.9rem;
  font-weight: 700;
  line-height: 9.8rem;
  letter-spacing: -0.3491rem;

  ${mediaMaxWidth("mobile")`
    font-size: 4.2rem;
    line-height: 5.6rem;
    letter-spacing: -0.21rem;
  `}
`;

export const Description = styled.p`
  color: #121212;
  font-size: 2.8rem;
  font-weight: 300;
  line-height: 4.6rem;
  letter-spacing: -0.0003rem;
  margin: 3.6rem 0 8.6rem;

  ${mediaMaxWidth("mobile")`
    font-size: 2.2rem;
    font-weight: 300;
    letter-spacing: -0.0002rem;
  `}
`;

export const Container = styled.div`
  display: flex;
  gap: 2.4rem;

  ${mediaMaxWidth("mobile")`
    flex-direction: column;
  `}
`;

export const Card = styled(CardWhite)`
  p {
    width: 40rem;

    ${mediaMaxWidth("mobile")`
      width: 100%;
    `}
  }
`;

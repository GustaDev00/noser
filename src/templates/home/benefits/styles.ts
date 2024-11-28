import { styled } from "styled-components";
import { Wrapper as _Wrapper } from "@/styles/components/wrapper";
import { LinksArrow } from "@/components/atoms/links-arrow";
import { LazyImage } from "@/components/atoms/lazy-image";
import { mediaMaxWidth, mediaMinWidth } from "@/utils/media-query";

export const Benefits = styled.section``;

export const BenefitsDesktop = styled.section`
  ${mediaMaxWidth("isMobileOrTabletVertical")`
    display: none;
  `}
`;

export const BenefitsMobile = styled.section`
  ${mediaMinWidth("isMobileOrTabletVertical")`
    display: none;
  `}
`;

export const Wrapper = styled(_Wrapper)`
  flex-direction: column;
`;

export const Content = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 7.3rem;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    flex-direction: column;
    align-items: flex-start;
  `}
`;

export const Title = styled.h3`
  color: #131523;
  font-family: var(--albertsans);
  font-size: 3.6rem;
  font-weight: 500;
  line-height: 8.7rem;
  letter-spacing: -0.18rem;
`;

export const Link = styled(LinksArrow)`
  color: #262626;

  svg {
    width: 2.9rem;

    path {
      fill: #262626;
    }
  }
`;

export const Container = styled.div`
  position: relative;
  width: 100vw;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    overflow-x: auto;
  `}
`;

export const WrapperCards = styled.div`
  width: calc(82rem * 4);
  display: flex;
  gap: 4rem;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    width: calc(85.8rem * 4);
  `}

  ${mediaMaxWidth("mobile")`
    width: calc(36.3rem * 4);
    gap: 2.5rem;
  `}
`;

export const Card = styled.div`
  display: flex;
  align-items: flex-end;
  position: relative;
  width: 73.3rem;
  height: 52.2rem;
  padding: 7.7rem 4.3rem;

  ${mediaMaxWidth("mobile")`
    width: 32.8rem;
    height: 34.4rem;
    padding: 2.4rem;
  `}
`;

export const Background = styled(LazyImage)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
`;

export const Article = styled.article`
  z-index: 1;
`;

export const Position = styled.span`
  color: #fff;
  font-family: var(--manrope);
  font-size: 3.8rem;
  font-weight: 500;
  line-height: 10.7rem;
  letter-spacing: -0.1923rem;

  ${mediaMaxWidth("mobile")`
    font-size: 3.2rem;
    font-weight: 600;
    line-height: 10.7rem;
    letter-spacing: -0.16rem;
  `}
`;

export const Text = styled.p`
  color: #fff;
  font-size: 2.8rem;
  font-weight: 500;
  line-height: 4.6rem;
  letter-spacing: -0.0003rem;

  ${mediaMaxWidth("mobile")`
    font-size: 2.2rem;
    font-weight: 500;
    line-height: 4.6rem;
    letter-spacing: -0.0002rem;
  `}
`;

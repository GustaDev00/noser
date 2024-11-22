import styled from "styled-components";
import { Wrapper as _Wrapper } from "@/styles/components/wrapper";
import { ButtonSwipe } from "@/components/atoms/button-swipe";
import { LazyImage } from "@/components/atoms/lazy-image";
import { mediaMaxWidth } from "@/utils/media-query";

export const Header = styled.section`
  position: relative;
  height: 100vh;

  @supports (-webkit-touch-callout: none) {
    height: 100svh;
  }
`;

export const Wrapper = styled(_Wrapper)`
  flex-direction: column;
  height: 100%;
  padding-top: 20rem;
  padding-bottom: 12rem;
  align-items: center;
  gap: 8rem;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    flex-direction: column;
    gap: 10rem;
    padding-top: 24rem;
  `}

  ${mediaMaxWidth("mobile")`
    gap: 6.2rem;
    padding-top: 12rem;
    padding-bottom: 4rem;
  `}
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 3.6rem;
`;

export const Background = styled(LazyImage)`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;

  ${mediaMaxWidth("mobile")`
    object-position: -80rem -10rem;
  `}
`;

export const Title = styled.h1`
  display: flex;
  align-items: center;
  gap: 4.4rem;
  text-align: center;
  font-family: var(--manrope);
  font-size: 12.5rem;
  font-weight: 700;
  letter-spacing: -0.63rem;
  background: linear-gradient(180deg, #fff 0%, rgba(255, 255, 255, 0.3) 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Line = styled.div`
  background: #fff;
  width: 16.6rem;
  height: 0.4rem;
`;

export const Subtitle = styled.p`
  color: #fff;
  text-align: center;
  font-size: 2.2rem;
  font-weight: 300;
  line-height: 3.6rem;
  letter-spacing: -0.0002rem;
`;

export const Button = styled(ButtonSwipe)``;

export const Divider = styled.div`
  width: 150.8rem;
  padding-top: 0.1rem;
  background: rgba(255, 255, 255, 0.3);
`;

export const Container = styled.div``;

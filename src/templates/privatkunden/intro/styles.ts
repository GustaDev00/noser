import { ButtonSwipe } from "@/components/atoms/button-swipe";
import { LazyImage } from "@/components/atoms/lazy-image";
import { Wrapper as _Wrapper } from "@/styles/components/wrapper";
import { mediaMaxWidth } from "@/utils/media-query";
import { styled } from "styled-components";

export const Intro = styled.section``;

export const Wrapper = styled(_Wrapper)`
  padding-top: 0rem;
  flex-direction: column;
  gap: 8.8rem;

  ${mediaMaxWidth("mobile")`
    gap: 5.6rem;
    padding-top: 5rem;
  `}
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;

  ${mediaMaxWidth("mobile")`
    flex-direction: column;
    justify-content: flex-start;
    gap: 5.2rem;
  `}
`;

export const Article = styled.article``;

export const Title = styled.h2`
  color: #1f1f1f;
  font-family: var(--manrope);
  font-size: 6.2rem;
  font-weight: 600;
  line-height: 9.3rem;
  letter-spacing: -0.3137rem;
  margin-bottom: 3rem;

  ${mediaMaxWidth("mobile")`
  font-size: 4.2rem;
  line-height: 6.7rem;
  letter-spacing: -0.2125rem;

  `}
`;

export const Button = styled(ButtonSwipe)`
  background: #0d4d9b;
  color: #fff;

  svg path {
    fill: #fff;
  }
`;

export const Text = styled.p`
  color: #292929;
  font-family: var(--manrope);
  font-size: 2.6rem;
  font-weight: 300;
  line-height: 5.3rem;
  letter-spacing: -0.0003rem;

  ${mediaMaxWidth("mobile")`
    color: #292929;
    font-size: 2rem;
    line-height: 5rem;
    letter-spacing: -0.0002rem;
  `}
`;

export const Img = styled(LazyImage)`
  width: 100%;
  border-radius: 1.2rem;
  object-fit: cover;

  ${mediaMaxWidth("mobile")`
    height: 25rem;
    object-position: bottom;
  `}
`;

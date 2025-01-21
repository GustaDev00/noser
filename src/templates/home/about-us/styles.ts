import { LazyImage } from "@/components/atoms/lazy-image";
import { Wrapper as _Wrapper } from "@/styles/components/wrapper";
import { mediaMaxWidth } from "@/utils/media-query";
import styled from "styled-components";

export const AboutUs = styled.section`
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
  flex-direction: column;
`;

export const Title = styled.h2`
  color: #1f1f1f;
  font-family: var(--manrope);
  font-size: 6.2rem;
  font-weight: 600;
  line-height: 9.3rem;
  letter-spacing: -0.31rem;
  margin-bottom: 7.6rem;

  ${mediaMaxWidth("mobile")`
    margin-bottom: 4.8rem;
    font-size: 4.2rem;
    line-height: 5.6rem;
    letter-spacing: -.2125rem;
  `}
`;

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 4.8rem;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    flex-direction: column;
    gap: 1.6rem;

    picture {
      width: 100%;
    }
  `}
`;

export const Img = styled(LazyImage)`
  width: 100%;
  height: 54.7rem;
  object-fit: cover;
  border-radius: 0.4rem;

  ${mediaMaxWidth("mobile")`
    height: 30.1rem;
  `}
`;

export const Content = styled.article`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 1.8rem;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    width: 100%;
  `}
`;

export const Text = styled.p`
  color: #292929;
  font-family: var(--manrope);
  font-size: 2.4rem;
  font-weight: 300;
  line-height: 5.3rem;
  letter-spacing: -0.0003rem;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    font-size: 3rem;
    line-height: 5.7rem;
  `}

  ${mediaMaxWidth("mobile")`
    font-size: 2.2rem;
    line-height: 4rem;
    letter-spacing: -0.0002rem;
  `}
`;

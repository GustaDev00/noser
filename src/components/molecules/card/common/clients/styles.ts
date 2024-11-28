import { LazyImage } from "@/components/atoms/lazy-image";
import { mediaMaxWidth } from "@/utils/media-query";
import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  padding: 2.6rem 4.2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    padding: 2.6rem 2.2rem;
  `}
`;

export const Title = styled.h3`
  color: #fff;
  font-size: 4.6rem;
  font-weight: 700;
  line-height: 4.6rem;
  letter-spacing: -0.0005rem;
`;

export const Description = styled.p`
  color: #fff;
  font-size: 2.5rem;
  font-weight: 200;
  line-height: 3.6rem;
  letter-spacing: -0.0002rem;
  margin-top: 0.8rem;
  margin-bottom: 2.3rem;
`;

export const Container = styled.div`
  picture:not(:first-child) img {
    position: relative;
  }

  picture:nth-of-type(2) img {
    left: -2rem;
  }

  picture:nth-of-type(3) img {
    left: -4rem;
  }
`;

export const Imgs = styled(LazyImage)`
  width: 8.3rem;
  height: 8.3rem;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    width: 6.3rem;
    height: 6.3rem;
  `}
`;

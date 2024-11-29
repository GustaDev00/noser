import { mediaMaxWidth } from "@/utils/media-query";
import styled from "styled-components";
import { LazyImage } from "../lazy-image";

export const Advantages = styled.div`
  position: relative;
  margin-bottom: 20rem;

  ${mediaMaxWidth("mobile")`
    margin-bottom: 10rem;
  `}
`;

export const Bg = styled(LazyImage)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
`;

export const Wrapper = styled.div`
  position: relative;
  padding: 10rem 14.3rem 14rem;
  z-index: 2;

  ${mediaMaxWidth("mobile")`
    padding: 9.4rem 1.6rem;
  `}
`;

export const Title = styled.h2`
  color: #fff;
  font-family: var(--manrope);
  font-size: 10.5rem;
  font-weight: 700;
  line-height: 10.7rem;
  letter-spacing: -0.5313rem;
  margin-bottom: 14.8rem;

  ${mediaMaxWidth("mobile")`
    font-size: 4.9rem;
    letter-spacing: -0.2479rem;
    margin-bottom: 6.6rem;
  `}
`;

export const Container = styled.div`
  display: flex;
  gap: 15.9rem;

  ${mediaMaxWidth("mobile")`
    flex-direction: column;
    gap: 6.4rem;
  `}
`;

export const Content = styled.div`
  position: relative;

  &:last-child::before {
    display: none;
  }

  &::before {
    content: "";
    position: absolute;
    right: -7.9rem;
    width: 0.1rem;
    height: 100%;
    background: #fff;
    opacity: 0.5;

    ${mediaMaxWidth("mobile")`
      width: 100%;
      height: 0.1rem;
      left: 0;
      bottom: -3.3rem;
    `}
  }
`;

export const SubTitle = styled.h3`
  color: #fff;
  font-size: 3.2rem;
  font-weight: 500;
  line-height: 5rem;
  letter-spacing: -0.0003rem;
  margin-bottom: 3.8rem;
`;

export const Text = styled.p`
  color: #fff;
  font-size: 2.2rem;
  font-weight: 100;
  line-height: 4.6rem;
  letter-spacing: -0.0002rem;
`;

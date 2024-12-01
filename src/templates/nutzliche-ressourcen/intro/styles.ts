import { Wrapper as _Wrapper } from "@/styles/components/wrapper";
import { mediaMaxWidth } from "@/utils/media-query";
import styled from "styled-components";

export const Intro = styled.section`
  position: relative;

  &::before {
    position: absolute;
    bottom: 0;
    left: 0;
    content: "";
    width: 100%;
    height: 0.1rem;
    background: rgba(0, 0, 0, 0.18);
  }
`;

export const Wrapper = styled(_Wrapper)`
  padding-top: 15rem;
  padding-bottom: 10rem;
  gap: 10rem;
  justify-content: center;

  ${mediaMaxWidth("mobile")`
    padding-top: 7rem;
    padding-bottom: 7rem;
    flex-direction: column;
    gap: 3rem;
  `}
`;

export const Title = styled.h2`
  color: #040404;
  font-family: var(--manrope);
  font-size: 8.2rem;
  font-weight: 600;
  line-height: 10.7rem;
  letter-spacing: -0.4149rem;

  ${mediaMaxWidth("mobile")`
  font-size: 4.8rem;
  letter-spacing: -0.2429rem;
`}
`;

export const Description = styled.p`
  color: #292929;
  font-size: 3rem;
  font-weight: 400;
  line-height: 4.6rem;
  letter-spacing: -0.0003rem;

  ${mediaMaxWidth("mobile")`
  font-size: 2.2rem;
  letter-spacing: -0.0002rem;
`}
`;

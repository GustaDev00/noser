import { LazyImage } from "@/components/atoms/lazy-image";
import { ArrowIcon } from "@/components/svgs/arrow";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 3.9rem;
  padding: 2.6rem 3.6rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
`;

export const img = styled(LazyImage)``;

export const Title = styled.h3`
  color: #fff;
  font-size: 2.8rem;
  font-weight: 700;
  line-height: 4.6rem;
  letter-spacing: -0.0003rem;
`;

export const Description = styled.p`
  color: #fff;
  font-size: 2rem;
  font-weight: 300;
  line-height: 3.6rem;
  letter-spacing: -0.0002rem;
`;

export const Link = styled.a`
  color: #fff;
  font-size: 2.2rem;
  font-weight: 600;
  line-height: 3.6rem;
  letter-spacing: -0.0002rem;
`;

export const Text = styled.span`
  text-decoration: underline;
`;

export const Icon = styled(ArrowIcon)`
  margin-left: 2rem;

  path {
    fill: white;
  }
`;

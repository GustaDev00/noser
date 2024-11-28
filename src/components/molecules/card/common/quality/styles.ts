import { LazyImage } from "@/components/atoms/lazy-image";
import { CheckIcon } from "@/components/svgs/check";
import { mediaMaxWidth } from "@/utils/media-query";
import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 2.6rem 4.2rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3rem;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    padding: 2.6rem 2.2rem;
  `}
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
`;

export const Icon = styled(CheckIcon)`
  margin-right: 1.6rem;
`;

export const Title = styled.h3`
  color: #fff;
  font-size: 3.2rem;
  font-weight: 500;
  line-height: 4.6rem;
  letter-spacing: -0.0003rem;
`;

export const Container = styled.div`
  background: #fff;
  padding: 2.5rem 5.2rem;
  border-radius: 1.7rem;
`;

export const Img = styled(LazyImage)`
  width: 100%;
  height: 5.6rem;
  object-fit: contain;
`;

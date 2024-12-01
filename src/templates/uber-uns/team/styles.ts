import { ArrowIcon } from "@/components/svgs/arrow";
import { Wrapper as _Wrapper } from "@/styles/components/wrapper";
import { mediaMaxWidth } from "@/utils/media-query";
import { styled } from "styled-components";

export const Team = styled.section`
  position: relative;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 0.1rem;
    background: rgba(0, 0, 0, 0.18);
  }

  &::after {
    top: unset;
    bottom: 0;
  }
`;

export const Wrapper = styled(_Wrapper)`
  flex-direction: column;
`;

export const Content = styled.div`
  margin-bottom: 11.2rem;

  ${mediaMaxWidth("mobile")`
    margin-bottom: 4.8rem;
  `}
`;

export const Title = styled.h2`
  color: #1f1f1f;
  font-family: var(--manrope);
  font-size: 6.9rem;
  font-weight: 700;
  line-height: 9.8rem;
  letter-spacing: -0.3491rem;

  ${mediaMaxWidth("mobile")`
  font-size: 4.2rem;
  line-height: 6.5rem;
  letter-spacing: -0.2125rem;
`}
`;

export const Description = styled.p`
  color: #121212;
  font-size: 2.8rem;
  font-weight: 300;
  line-height: 4.6rem;
  letter-spacing: -0.0003rem;

  ${mediaMaxWidth("mobile")`
  font-size: 2.2rem;
  line-height: 4.6rem;
  letter-spacing: -0.0002rem;
`}
`;

export const Container = styled.div`
  display: flex;
  gap: 3.7rem;

  ${mediaMaxWidth("mobile")`
    flex-direction: column;
  `}
`;

export const ContentCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-bottom: 3.2rem;
  max-height: 9rem;
  overflow: hidden;
  transition: max-height 0.4s ease;
`;

export const Arrow = styled(ArrowIcon)`
  width: 4.2rem;
  height: 3.6rem;
  transition: transform 0.4s ease;
  transition: transform 0.4s ease;

  path {
    fill: #fff;
  }
`;

export const Card = styled.div<{ $active?: boolean }>`
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 51.4rem;
  padding: 4.5rem 3.2rem;

  ${ContentCard} {
    max-height: ${({ $active }) => ($active ? "40rem" : "9rem")};
  }

  ${Arrow} {
    transform: ${({ $active }) => ($active ? "rotate(45deg)" : "rotate(0deg)")};
  }
`;

export const Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.8rem;
`;

export const Article = styled.article`
  position: relative;
  width: 100%;

  &::before,
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    background: rgb(157 157 157);
  }

  &::after {
    bottom: -0.3rem;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    z-index: 2;
  }

  &::before {
    width: 100%;
    height: 0.2rem;
  }
`;

export const Text = styled.div`
  display: flex;
  align-items: center;
  gap: 2.2rem;
`;

export const Span = styled.p`
  font-family: var(--albertsans);
  color: #fff;
  font-size: 2rem;
  font-weight: 300;
  line-height: 3.4rem;
  letter-spacing: -0.0002rem;
`;

export const Name = styled.h3`
  color: #fff;
  font-family: var(--manrope);
  font-size: 3.2rem;
  font-weight: 600;
  line-height: 8.7rem;
  letter-spacing: -0.1619rem;
`;

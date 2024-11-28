import { CardWhite } from "@/components/atoms/card-white";
import { Article } from "@/components/atoms/card-white/styles";
import { LazyImage } from "@/components/atoms/lazy-image";
import { Wrapper as _Wrapper } from "@/styles/components/wrapper";
import { mediaMaxWidth } from "@/utils/media-query";
import styled from "styled-components";

export const WhyChooseUs = styled.section`
  padding-bottom: 10rem;
`;

export const Wrapper = styled(_Wrapper)`
  flex-direction: column;
`;

export const Content = styled.div``;

export const Title = styled.h2`
  color: #1f1f1f;
  text-align: center;
  font-family: var(--manrope);
  font-size: 6.9rem;
  font-weight: 700;
  line-height: 9.8rem;
  letter-spacing: -0.34rem;

  ${mediaMaxWidth("mobile")`
    font-size: 4.2rem;
    line-height: 5.6rem;
    letter-spacing: -0.2125rem;
  `}
`;

export const Description = styled.p`
  color: #121212;
  text-align: center;
  font-size: 2.8rem;
  font-weight: 300;
  line-height: 4.6rem;
  letter-spacing: -0.0003rem;
  margin: 3.3rem 0 10.5rem;

  ${mediaMaxWidth("mobile")`
    font-size: 2.2rem;
    letter-spacing: -0.0002rem;
    margin-bottom: 6rem;
  `}
`;

export const Container = styled.div`
  display: flex;
  gap: 2.6rem;

  ${mediaMaxWidth("mobile")`
    flex-direction: column;
  `}
`;

export const Img = styled.div`
  position: relative;
`;

export const Text = styled.p`
  position: absolute;
  left: 3.8rem;
  bottom: 2.8rem;
  color: #fff;
  font-family: var(--manrope);
  font-size: 6.8rem;
  font-weight: 200;
  line-height: 10.7rem;
  letter-spacing: -0.3441rem;

  b {
    font-weight: 400;
  }

  ${mediaMaxWidth("mobile")`
    font-size: 4.2rem;
    letter-spacing: -0.2125rem;
  `}
`;

export const Imagem = styled(LazyImage)`
  width: 60.5rem;
  height: 57.2rem;
  object-fit: cover;
  border-radius: 0.8rem;

  ${mediaMaxWidth("mobile")`
    width: 100%;
  `}
`;

export const List = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.8rem 1.7rem;

  ${mediaMaxWidth("mobile")`
    grid-template-columns: 1fr;
  `}
`;

export const Item = styled.li``;

export const Card = styled(CardWhite)`
  ${Article} {
    ${mediaMaxWidth("mobile")`
      flex-direction: column;
      align-items: flex-start;
      gap: 1.8rem;
    `}
  }
`;

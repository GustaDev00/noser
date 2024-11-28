import styled from "styled-components";
import { LinksArrow } from "../links-arrow";
import { Text } from "../links-arrow/styles";
import { mediaMaxWidth } from "@/utils/media-query";

export const CardWhite = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 3.8rem 3.4rem;
  border-radius: 0.8rem;
  border: 0.1rem solid rgba(0, 0, 0, 0.15);
  background: #fff;
  box-shadow: 0 0 2.8rem 0 rgba(0, 0, 0, 0.05);
`;

export const Content = styled.div``;

export const Article = styled.article`
  display: flex;
  align-items: center;
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 7.5rem;
  height: 7.5rem;
  border-radius: 50%;
  background: #d8eaff;
  margin-right: 1.8rem;

  svg {
    width: 4.2rem;
    height: 4.2rem;
  }
`;

export const Title = styled.h3`
  color: #000;
  font-size: 2.6rem;
  font-weight: 500;
  line-height: 4.6rem;
  letter-spacing: -0.0003rem;
`;

export const Description = styled.p`
  color: #000;
  font-size: 1.7rem;
  font-weight: 300;
  line-height: 3.6rem;
  letter-spacing: -0.0002rem;
  margin-top: 3.2rem;
`;

export const Container = styled.div`
  margin-top: 6.4rem;

  ${mediaMaxWidth("mobile")`
    margin-top: 1rem;
  `}
`;

export const Link = styled(LinksArrow)`
  ${Text} {
    color: #000000;
  }

  svg path {
    fill: #000000;
  }
`;

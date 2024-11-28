import styled from "styled-components";
import { ArrowIcon } from "@/components/svgs/arrow";

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

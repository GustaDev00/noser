import styled from "styled-components";
import { LazyImage } from "../lazy-image";
import { mediaMaxWidth } from "@/utils/media-query";
import _Link from "next/link";

export const Link = styled(_Link)``;

export const Logo = styled(LazyImage)`
  height: 8.6rem;
  object-fit: contain;

  ${mediaMaxWidth("mobile")`
    height: 6.2rem;
  `}
`;

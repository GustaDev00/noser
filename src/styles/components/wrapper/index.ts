import { mediaMaxWidth } from "@/utils/media-query";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  padding: 18.1rem 14.1rem;
  z-index: 2;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    padding: 10rem 4rem;
    flex-direction: column;
  `}

  ${mediaMaxWidth("mobile")`
    padding: 6rem 1.4rem;
  `}
`;

import { mediaMaxWidth } from "@/utils/media-query";
import styled from "styled-components";

export const Accounting = styled.section`
  margin-top: 10rem;

  ${mediaMaxWidth("mobile")`
    display: flex;
    flex-direction: column-reverse;
  `}
`;

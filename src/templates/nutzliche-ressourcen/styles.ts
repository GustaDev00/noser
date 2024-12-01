import { mediaMaxWidth } from "@/utils/media-query";
import styled from "styled-components";
import { Header as _Header } from "@/components/organisms/header";
import { Title } from "@/components/organisms/header/styles";

export const Header = styled(_Header)`
  ${Title} {
    ${mediaMaxWidth("mobile")`
      font-size: 3.7rem;
      line-height: 5rem;
    `}
  }
`;

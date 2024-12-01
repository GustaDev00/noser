import { mediaMaxWidth } from "@/utils/media-query";
import styled from "styled-components";
import { Header as _Header } from "@/components/organisms/header";
import { Title } from "@/components/organisms/header/styles";
import { Article as _Article } from "@/components/atoms/article";
import { Card, Container, Content, Img } from "@/components/atoms/article/styles";

export const Header = styled(_Header)`
  ${Title} {
    ${mediaMaxWidth("mobile")`
      font-size: 4.8rem;
      line-height: 7rem;
    `}
  }
`;

export const ArticleInverted = styled(_Article)`
  ${Img} {
    height: 95rem !important;
  }

  ${Content} {
    ${mediaMaxWidth("mobile")`
      h2 {
        line-height: 6.8rem;
        margin-bottom: 2.4rem;
      }
    `}
  }
`;

export const Article = styled(_Article)`
  ${Content} {
    ${mediaMaxWidth("mobile")`
      h2 {
        line-height: 6.8rem;
        margin-bottom: 2.4rem;
      }
    `}
  }

  ${Container} {
    picture:last-of-type img {
      margin-top: 5.8rem;

      ${mediaMaxWidth("mobile")`
        margin-top: 2rem;
      `}
    }
  }

  ${Img} {
    width: 100%;
    border-radius: 0 0.8rem 0.8rem 0;

    ${mediaMaxWidth("mobile")`
      border-radius: 0.8rem;
    `}
  }
`;

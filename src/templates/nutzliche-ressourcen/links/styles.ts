import styled from "styled-components";
import { Wrapper as _Wrapper } from "@/styles/components/wrapper";
import { DownloadIcon as _DownloadIcon } from "@/components/svgs/downloads";
import { mediaMaxWidth } from "@/utils/media-query";
import { LazyImage } from "@/components/atoms/lazy-image";

export const LinkSection = styled.section``;

export const Wrapper = styled(_Wrapper)``;

export const Container = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 14rem;
  row-gap: 6rem;
  align-items: start;
  grid-auto-rows: minmax(50rem, auto);

  ${mediaMaxWidth("mobile")`
    display: flex;
    flex-direction: column;
    gap: 3rem;
  `}
`;

export const ContentLinks = styled.div`
  &:first-child {
    margin-top: 6rem;

    ${mediaMaxWidth("mobile")`
      margin-top: 0;
    `}
  }
`;

export const Article = styled.article`
  margin-bottom: 2.2rem;
`;

export const Title = styled.h2`
  color: #1d4e89;
  font-family: var(--manrope);
  font-size: 5.5rem;
  font-weight: 600;
  line-height: 10.7rem;
  letter-spacing: -0.2783rem;

  ${mediaMaxWidth("mobile")`
  font-size: 4.2rem;
  text-align: center;
  letter-spacing: -0.2125rem;
`}
`;

export const Description = styled.p`
  color: #292929;
  font-family: var(--manrope);
  font-size: 1.8rem;
  font-weight: 300;
  line-height: 3.9rem;
  letter-spacing: -0.0002rem;

  ${mediaMaxWidth("mobile")`
  text-align: center;
`}
`;

export const List = styled.ul`
  top: 0%;
  width: 100%;
  position: absolute;
  transition: top 0.4s ease;
`;

export const Item = styled.li`
  padding: 3.4rem 0;
  width: 100%;
  border-top: 0.1rem solid rgba(0, 0, 0, 0.2);
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;

  color: #292929;
  font-family: var(--manrope);
  font-size: 2.2rem;
  font-weight: 300;
  line-height: 5.3rem;
  letter-spacing: -0.0002rem;

  ${mediaMaxWidth("mobile")`
    font-size: 2rem;
    text-align: center;
    justify-content: center;
  `}
`;

export const Text = styled.p`
  text-decoration: underline;
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4.2rem;
  height: 4.2rem;
  border-radius: 2.1rem;
  border: 0.1rem solid rgba(29, 78, 137, 0.4);

  ${mediaMaxWidth("mobile")`
    display: none;
  `}
`;

export const DownloadIcon = styled(_DownloadIcon)`
  width: 2.2rem;
  height: 2.2rem;
`;

export const Img = styled(LazyImage)`
  position: absolute;
  bottom: 18rem;
  width: 69.9rem;
  height: 107.7rem;
  border-radius: 0.8rem;
  object-fit: cover;

  ${mediaMaxWidth("mobile")`
    display: none;
  `}
`;

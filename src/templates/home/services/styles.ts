import { ButtonTransparent } from "@/components/atoms/button-transparent";
import { LazyImage } from "@/components/atoms/lazy-image";
import { SubtitleLight, TextSmall } from "@/styles/components/subtitle";
import { TitleWhite } from "@/styles/components/titles";
import { Wrapper as _Wrapper } from "@/styles/components/wrapper";
import { mediaMaxWidth } from "@/utils/media-query";
import styled from "styled-components";

export const Services = styled.section`
  position: relative;

  ${mediaMaxWidth("mobile")`
    padding-bottom: 4rem;
  `}

  &:before {
    content: "";
    position: absolute;
    bottom: 0px;
    left: 50%;
    transform: translateX(-50%);
    display: block;
    width: calc(100% - (16.3rem * 2));
    height: 0.1rem;
    background: ${({ theme }) => theme.black015};

    ${mediaMaxWidth("isMobileOrTabletVertical")`
      width: calc(100% - (4rem * 2));
    `}

    ${mediaMaxWidth("mobile")`
      width: calc(100% - (2.2rem * 2))
    `}
  }
`;

export const Wrapper = styled(_Wrapper)`
  overflow: hidden;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    padding: 7rem 4rem;
  `}

  ${mediaMaxWidth("mobile")`
    padding: 3.6rem 2.2rem 5rem;
  `}
`;

export const Background = styled(LazyImage)`
  position: absolute;
  width: calc(100% - (16.3rem * 2));
  height: calc(100% - (9.33rem * 2));
  object-fit: cover;
  z-index: 0;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    width: calc(100% - (4rem * 2));
    height: calc(100% - (7.1rem * 2));
  `}

  ${mediaMaxWidth("mobile")`
    width: calc(100% - (2.2rem * 2));
    height: 100%;
  `}
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;

  ${mediaMaxWidth("mobile")`
    flex-direction: column;
    gap: 4rem;
  `}
`;

export const Img = styled(LazyImage)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Tags = styled.div`
  position: absolute;
  left: 8.4rem;
  bottom: 11rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 3rem;

  ${mediaMaxWidth("mobile")`
    top: 20%;
    left: 3.1rem;
    gap: 1.7rem;
  `}
`;

export const Tag = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;
  padding: 1.3rem 3.4rem;
  border-radius: 1rem;
  border: 0.1rem solid ${({ theme }) => theme.black005};
  background: ${({ theme }) => theme.white};
  box-shadow: 0 1.2rem 2.2rem 0 ${({ theme }) => theme.black03};

  ${TextSmall}

  &:first-child svg {
    width: 3.37rem;
    height: 3rem;
  }

  &:last-child {
    margin-left: 9rem;

    svg {
      width: 2.6rem;
      height: 3rem;
    }

    ${mediaMaxWidth("mobile")`
      margin-left: 0;
    `}
  }

  ${mediaMaxWidth("mobile")`
    justify-content: space-between;
    gap: 0rem;
    width: 25.1rem;
  `}
`;

export const Content = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.6rem;
  justify-content: flex-start;

  ${mediaMaxWidth("mobile")`
    padding: 0rem 4rem;
    gap: 3.4rem;
  `}
`;

export const Title = styled.h2`
  ${TitleWhite}

  font-size: 5.4rem;
`;

export const Line = styled.div`
  background: ${({ theme }) => theme.white};
  height: 0.4rem;
  width: 5.6rem;
`;

export const Subtitle = styled.p`
  ${SubtitleLight}

  color: ${({ theme }) => theme.grayx11};

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    font-size: 2.2rem;
    line-height: 3.6rem;

    br {
      display: none;
    }
  `}
`;

export const Button = styled(ButtonTransparent)``;

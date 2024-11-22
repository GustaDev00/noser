import { ButtonSwipe } from "@/components/atoms/button-swipe";
import { LazyImage } from "@/components/atoms/lazy-image";
import { CheckConfirmed } from "@/components/svgs/check-confirmed";
import { SubtitleLight } from "@/styles/components/subtitle";
import { TitleBig } from "@/styles/components/titles";
import { Wrapper as _Wrapper } from "@/styles/components/wrapper";
import { mediaMaxWidth } from "@/utils/media-query";
import styled from "styled-components";

export const AboutUs = styled.section``;

export const Wrapper = styled(_Wrapper)`
  gap: 8.8rem;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    gap: 12rem;
  `}

  ${mediaMaxWidth("mobile")`
    gap: 15rem;
  `}
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
`;

export const ImgSmall = styled(LazyImage)`
  height: 35.3rem;
  object-fit: cover;
  position: absolute;
  right: 0;
  bottom: 0%;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    height: 45.3rem;
    bottom: -10rem;
  `}

  ${({ theme }) => mediaMaxWidth("mobile")`
    border-left: 0.2rem solid ${theme.white};
    border-right: 0.2rem solid ${theme.white};
    width: 23.7rem;
    height: 27.7rem;
    bottom: -16rem;
  `}
`;

export const ImgBig = styled(LazyImage)`
  height: 58.2rem;
  object-fit: cover;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    height: 68.2rem;
  `}

  ${mediaMaxWidth("mobile")`
    width: 29.2rem;
    height: 27.6rem;
  `}
`;

export const Content = styled.div`
  width: 100%;
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  gap: 4.2rem;

  ${mediaMaxWidth("mobile")`
    gap: 2.2rem;
  `}
`;

export const Title = styled.h2`
  ${TitleBig}
`;

export const Subtitle = styled.p`
  ${SubtitleLight}

  color: ${({ theme }) => theme.eerieBlack};
`;

export const Button = styled(ButtonSwipe)`
  ${mediaMaxWidth("mobile")`
    margin: 2.4rem 0;
  `}
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;

  ${mediaMaxWidth("mobile")`
    gap: 3.2rem;
  `}
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 3rem;

  color: ${({ theme }) => theme.eerieBlack};
  font-size: 2rem;
  font-weight: 400;
  line-height: 3rem;
  letter-spacing: -0.0002rem;

  ${mediaMaxWidth("mobile")`
    flex-direction: column; 
    align-items: flex-start;
  `}
`;

export const Icon = styled.div`
  background: ${({ theme }) => theme.white};
  box-shadow: 0 0.4rem 1.6rem ${({ theme }) => theme.black008};
  border-radius: 50%;
  width: 8rem;
  height: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 2.6rem;
    height: 2.6rem;
  }
`;

export const Check = styled(CheckConfirmed)``;

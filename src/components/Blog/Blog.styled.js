import styled from 'styled-components';
import Button from 'components/Button/Button';

import { ContainerWrapper } from '../Container/Container.styled';

export const Container = styled(ContainerWrapper)`
  /* background-color: ${p => p.theme.colors.blue}; */

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
  }
`;

export const Image = styled.img`
  height: 100%;
  object-fit: cover;

  @media screen and (min-width: 768px) {
    width: 368px;
  }

  @media screen and (min-width: 1360px) {
    width: 670px;
  }
`;

export const Wrapper = styled.div`
  padding: 48px 20px 58px 20px;
  background-color: ${p => p.theme.colors.blue};

  @media screen and (min-width: 768px) {
    width: 400px;
    padding: 59px 32px;
  }

  @media screen and (min-width: 1360px) {
    width: 690px;
    padding: 80px 20px 80px 28px;
  }
`;

export const Date = styled.p`
  font-family: ${p => p.theme.font.body};
  font-size: ${p => p.theme.fontSize[0]}px;
  font-weight: ${p => p.theme.fontWeight.regular};
  font-style: normal;
  line-height: 1.38;
  color: ${p => p.theme.colors.whiteFont};

  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSize[1]}px;
    line-height: 1.38;
  }
`;

export const Title = styled.h2`
  font-family: ${p => p.theme.font.body};
  font-size: ${p => p.theme.fontSize[5]}px;
  font-weight: ${p => p.theme.fontWeight.regular};
  font-style: normal;
  line-height: 1.38;
  color: ${p => p.theme.colors.whiteFont};
  margin-top: 16px;

  /* @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSize[7]}px;
    line-height: 1.2;
  } */
`;

export const Text = styled.p`
  font-family: ${p => p.theme.font.body};
  font-size: ${p => p.theme.fontSize[0]}px;
  font-weight: ${p => p.theme.fontWeight.regular};
  font-style: normal;
  line-height: 1.38;
  color: ${p => p.theme.colors.whiteFont};
  margin-top: 24px;

  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSize[1]}px;
    line-height: 1.39;
  }
`;

export const Btn = styled(Button)`
  border: 1px solid #ffffff;
  font-size: ${p => p.theme.fontSize[0]}px;
  line-height: 1.38;
  color: ${p => p.theme.colors.whiteFont};
  background-color: ${p => p.theme.colors.blue};

  &:hover {
    border: 1px solid #0284d0;
    background-color: ${p => p.theme.colors.whiteFont};
    color: ${p => p.theme.colors.blue};
  }

  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSize[1]}px;
  }
`;

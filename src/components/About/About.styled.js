import styled from 'styled-components';
import Button from '../../components/Button/Button';

import { ContainerWrapper } from '../Container/Container.styled';

export const Container = styled(ContainerWrapper)`
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

export const Image = styled.img`
  width: 100%;
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
  padding: 79px 21px 79px 20px;
  background-color: ${p => p.theme.colors.green};

  @media screen and (min-width: 768px) {
    width: 400px;
    padding: 62px 32px;
  }

  @media screen and (min-width: 1360px) {
    width: 690px;
    padding: 80px 28px 86px 20px;
  }
`;

export const PreTitle = styled.p`
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

  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSize[7]}px;
    line-height: 1.2;
  }
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

  &:hover {
    border: 1px solid #28a745;
    background-color: ${p => p.theme.colors.whiteFont};
    color: ${p => p.theme.colors.green};
  }

  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSize[1]}px;
  }
`;

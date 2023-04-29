import styled from 'styled-components';

import { ContainerWrapper } from '../Container/Container.styled';

export const Section = styled.section`
  background-color: ${p => p.theme.colors.green};
`;

export const Container = styled(ContainerWrapper)`
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

export const Wrapper = styled.div`
  padding: 79px 21px;

  @media screen and (min-width: 768px) {
    padding: 62px 32px;
  }

  @media screen and (min-width: 1360px) {
    padding: 80px 28px;
  }
`;

export const PreTitle = styled.p`
  font-family: ${p => p.theme.font.body};
  font-size: ${p => p.theme.fontSize[0]}px;
  font-weight: ${p => p.theme.fontWeight.regular};
  font-style: normal;
  line-height: 1.38;
  color: ${p => p.theme.colors.whiteFont};
`;

export const Title = styled.h2`
  font-family: ${p => p.theme.font.body};
  font-size: ${p => p.theme.fontSize[5]}px;
  font-weight: ${p => p.theme.fontWeight.regular};
  font-style: normal;
  line-height: 1.38;
  color: ${p => p.theme.colors.whiteFont};
  margin-top: 16px;
`;

export const Text = styled.p`
  font-family: ${p => p.theme.font.body};
  font-size: ${p => p.theme.fontSize[0]}px;
  font-weight: ${p => p.theme.fontWeight.regular};
  font-style: normal;
  line-height: 1.38;
  color: ${p => p.theme.colors.whiteFont};
  margin-top: 24px;
`;

export const Button = styled.button`
  margin-top: 24px;
  padding: 16px 32px;
  border-radius: 5px;
  border: 1px solid #ffffff;
  font-family: ${p => p.theme.font.body};
  font-size: ${p => p.theme.fontSize[0]}px;
  font-weight: ${p => p.theme.fontWeight.regular};
  font-style: normal;
  line-height: 1.38;
  color: ${p => p.theme.colors.whiteFont};
  background-color: ${p => p.theme.colors.green};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    border: 1px solid #28a745;
    background-color: ${p => p.theme.colors.whiteFont};
    color: ${p => p.theme.colors.green};
  }
`;

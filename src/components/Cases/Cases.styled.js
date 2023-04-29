import styled from 'styled-components';

export const Section = styled.section`
  padding: 56px 20px 40px 20px;
  text-align: center;
`;

export const PreTitle = styled.p`
  font-family: ${p => p.theme.font.body};
  font-size: ${p => p.theme.fontSize[0]}px;
  font-weight: ${p => p.theme.fontWeight.regular};
  font-style: normal;
  line-height: 1.38;
  color: ${p => p.theme.colors.blackFont};
`;

export const Title = styled.h2`
  font-family: ${p => p.theme.font.body};
  font-size: ${p => p.theme.fontSize[5]}px;
  font-weight: ${p => p.theme.fontWeight.regular};
  font-style: normal;
  line-height: 1.38;
  color: ${p => p.theme.colors.blackFont};
  margin-top: 16px;
`;

export const Text = styled.p`
  font-family: ${p => p.theme.font.body};
  font-size: ${p => p.theme.fontSize[0]}px;
  font-weight: ${p => p.theme.fontWeight.regular};
  font-style: normal;
  line-height: 1.38;
  color: ${p => p.theme.colors.blackFont};
  margin-top: 24px;
`;

export const ListImages = styled.ul`
  margin-top: 31px;
`;

export const ItemImage = styled.li`
  &:not(:first-child) {
    margin-top: 8px;
  }
`;

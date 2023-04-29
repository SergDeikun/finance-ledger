import styled from 'styled-components';

export const Section = styled.section`
  padding: 51px 20px 25px;
  background-color: #f4f4f4;
`;

export const Title = styled.h2`
  font-family: ${p => p.theme.font.body};
  font-size: ${p => p.theme.fontSize[5]}px;
  font-weight: ${p => p.theme.fontWeight.regular};
  font-style: normal;
  line-height: 1.5;
  color: ${p => p.theme.colors.whiteFont};
`;

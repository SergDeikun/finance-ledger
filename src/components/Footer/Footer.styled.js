import styled from 'styled-components';

export const FooterBox = styled.footer`
  padding: 20px 30px 20px 34px;
  background-color: ${p => p.theme.colors.blackFont};
  text-align: center;
`;

export const Text = styled.p`
  font-family: ${p => p.theme.font.body};
  font-size: ${p => p.theme.fontSize[0]}px;
  font-weight: ${p => p.theme.fontWeight.regular};
  font-style: normal;
  line-height: 1.38;
  color: ${p => p.theme.colors.whiteFont};
  margin-top: 12px;

  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSize[1]}px;
    line-height: 1.39;
    margin-top: 10px;
  }
`;

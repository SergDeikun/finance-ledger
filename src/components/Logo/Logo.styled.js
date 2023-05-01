import styled from 'styled-components';
// import { ReactComponent as LIcon } from 'images/icons/logoIcon.svg';
import LogoIc from '../../images/icons/logo.svg';

export const Link = styled.a`
  display: flex;
  align-items: center;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.02);
    filter: brightness(1.1);
  }
`;

export const LogoBox = styled.div`
  background-image: url(${LogoIc});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 39px;
  height: 35px;
  fill: ${p => p.theme.colors.green};
`;

// export const LogoIcon = styled(LIcon)
//   width: 39px;
//   height: 35px;
//   fill: ${p => p.theme.colors.green};
// `;

export const LogoText = styled.p`
  font-family: ${p => p.theme.font.body};
  font-size: ${p => p.theme.fontSize[4]}px;
  font-weight: ${p => p.theme.fontWeight.regular};
  color: ${p => p.theme.colors.whiteFont};
  font-style: normal;
  line-height: 1.36;
  margin-left: 8px;

  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSize[6]}px;
    line-height: 1.26;
    margin-left: 10px;
  }
`;

export const GreenText = styled.span`
  color: ${p => p.theme.colors.green};
`;

export const Icon = styled.img`
  width: 40px;
  height: 35px;
`;

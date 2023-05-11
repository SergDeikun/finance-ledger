import styled from 'styled-components';

import { ReactComponent as FbIcon } from '../../images/icons/facebook.svg';
import { ReactComponent as TwIcon } from '../../images/icons/twitter.svg';
import { ReactComponent as YoIcon } from '../../images/icons/youtube.svg';
import { ReactComponent as LiIcon } from '../../images/icons/linkedin.svg';

export const List = styled.ul`
  display: flex;
  justify-content: center;
`;

export const Item = styled.li`
  &:not(:first-child) {
    margin-left: 25px;
  }
`;

export const LinkItem = styled.a`
  width: 100%;
`;

export const FacebookIcon = styled(FbIcon)`
  width: 35px;
  height: 35px;
  fill: ${p => p.theme.colors.whiteFont};
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);

  ${LinkItem}:hover & {
    opacity: 0.8;
  }
`;

export const TwitterIcon = styled(TwIcon)`
  width: 35px;
  height: 35px;

  fill: ${p => p.theme.colors.whiteFont};
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);

  ${LinkItem}:hover & {
    opacity: 0.8;
  }
`;

export const YouTubeIcon = styled(YoIcon)`
  width: 40px;
  height: 35px;

  fill: ${p => p.theme.colors.whiteFont};
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);

  ${LinkItem}:hover & {
    opacity: 0.8;
  }
`;

export const LinkEdinIcon = styled(LiIcon)`
  width: 31px;
  height: 35px;

  fill: ${p => p.theme.colors.whiteFont};
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);

  ${LinkItem}:hover & {
    opacity: 0.8;
  }
`;

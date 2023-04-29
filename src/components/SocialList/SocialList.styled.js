import styled from 'styled-components';

import FacebookIcon from '../../images/icons/facebook.svg';

export const List = styled.ul`
  display: flex;
  justify-content: center;
`;

export const Item = styled.li`
  &:not(:first-child) {
    margin-left: 25px;
  }
`;

export const FbIcon = styled.img`
  width: 35px;
  height: 35px;
`;

export const TwIcon = styled.img`
  width: 35px;
  height: 35px;
`;

export const YoIcon = styled.img`
  width: 40px;
  height: 35px;
`;

export const LiIcon = styled.img`
  width: 31px;
  height: 35px;
`;

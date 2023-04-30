import styled from 'styled-components';

import { MdOutlineArrowBack } from 'react-icons/md';

export const Title = styled.p`
  font-family: ${p => p.theme.font.body};
  font-size: ${p => p.theme.fontSize[4]}px;
  font-weight: ${p => p.theme.fontWeight.semiBold};
  font-style: normal;
  line-height: 1.38;
  color: ${p => p.theme.colors.blackFont};
`;

export const Text = styled.p`
  font-family: ${p => p.theme.font.body};
  font-size: ${p => p.theme.fontSize[1]}px;
  font-weight: ${p => p.theme.fontWeight.semiBold};
  font-style: normal;
  line-height: 1.38;
  color: ${p => p.theme.colors.blackFont};
  margin-top: 10px;
`;

export const BackBtn = styled.button`
  display: flex;
  align-items: center;
  font-family: ${p => p.theme.font.body};
  font-size: ${p => p.theme.fontSize[1]}px;
  font-weight: ${p => p.theme.fontWeight.semiBold};
  font-style: normal;
  line-height: 1.38;
  color: ${p => p.theme.colors.green};
  margin-top: 10px;
  border: none;
  background-color: transparent;
`;

export const IconBack = styled(MdOutlineArrowBack)`
  width: 20px;
  height: 20px;
  fill: ${p => p.theme.colors.green};
  margin-right: 5px;
`;

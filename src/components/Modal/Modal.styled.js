import styled from 'styled-components';

import { MdOutlineArrowBack } from 'react-icons/md';

export const Backdrop = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  z-index: 10;
  overflow: hidden;
  background-color: rgb(6, 11, 16);
`;

export const ModalWindow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  padding: 20px;
  background-color: ${p => p.theme.colors.whiteFont};
  border-radius: 15px;
`;

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

// import styled from 'styled-components';
import styled, { keyframes } from 'styled-components';

const openModal = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Backdrop = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  z-index: 10;
  overflow: hidden;
  background-color: rgb(6, 11, 16);
  animation: ${openModal} 0.3s ease-in-out;
`;

export const ModalWindow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* min-height: 500px; */
  width: 290px;
  padding: 10px;
  animation: ${openModal} 0.3s ease-in-out;

  @media screen and (min-width: 768px) {
    width: 400px;
    padding: 20px;
  }
  background-color: ${p => p.theme.colors.whiteFont};
  border-radius: 15px;
`;

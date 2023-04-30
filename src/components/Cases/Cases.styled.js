import styled from 'styled-components';
import Modal from 'components/Modal/Modal';

export const Section = styled.section`
  padding: 56px 20px 40px 20px;
  text-align: center;

  @media screen and (min-width: 768px) {
    padding: 48px 32px 40px 32px;
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
  color: ${p => p.theme.colors.blackFont};

  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSize[1]}px;
    line-height: 1.38;
  }
`;

export const Title = styled.h2`
  font-family: ${p => p.theme.font.body};
  font-size: ${p => p.theme.fontSize[5]}px;
  font-weight: ${p => p.theme.fontWeight.regular};
  font-style: normal;
  line-height: 1.38;
  color: ${p => p.theme.colors.blackFont};
  margin-top: 16px;

  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSize[7]}px;
    line-height: 1.2;
  }
`;

export const Text = styled.p`
  font-family: ${p => p.theme.font.body};
  font-size: ${p => p.theme.fontSize[0]}px;
  font-weight: ${p => p.theme.fontWeight.regular};
  font-style: normal;
  line-height: 1.38;
  color: ${p => p.theme.colors.blackFont};
  margin-top: 24px;

  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSize[1]}px;
    line-height: 1.39;
  }
`;

export const ListImages = styled.ul`
  margin-top: 31px;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 148px);
    gap: 18px;
  }

  @media screen and (min-width: 1360px) {
    grid-template-rows: repeat(2, 282px);
  }
`;

export const ItemImage = styled.li`
  overflow: hidden;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  :hover {
    opacity: 0.7;
  }
  @media screen and (max-width: 767px) {
    &:not(:first-child) {
      margin-top: 8px;
    }
  }
`;

export const ModalWindov = styled(Modal)`
  padding: 0;
  height: 310px;
  width: 300px;
  background-color: rgb(6, 11, 16);

  @media screen and (min-width: 768px) {
    width: 600px;
    height: 600px;
  }
`;

export const LightboxImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const PrevButton = styled.button`
  position: absolute;
  left: 0;
  top: 50%;
  border: none;
  background-color: transparent;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media screen and (min-width: 768px) {
    opacity: 0;
  }
`;
export const PrevBtnWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 220px;
  height: 100%;

  &:hover {
    button {
      opacity: 1;
    }
  }
`;

export const NextButton = styled.button`
  position: absolute;
  right: 0;
  top: 50%;
  border: none;
  background-color: transparent;

  @media screen and (min-width: 768px) {
    opacity: 0;
  }

  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const NextBtnWrap = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 220px;
  height: 100%;

  &:hover {
    button {
      opacity: 1;
    }
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: -40px;
  right: 0;
  border: none;
  background-color: transparent;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    opacity: 0.7;
  }
`;

export const PreloaderWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgb(6, 11, 16);
`;

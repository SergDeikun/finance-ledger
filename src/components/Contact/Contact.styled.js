import styled from 'styled-components';

export const Box = styled.div`
  max-width: 100%;

  @media screen and (min-width: 768px) {
    display: flex;
    height: 454px;
  }
`;

export const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;

  @media screen and (min-width: 768px) {
    width: 368px;
  }

  @media screen and (min-width: 1360px) {
    width: 670px;
  }
`;

export const WrapperForm = styled.div`
  padding: 51px 20px 25px 20px;
  background-color: #f4f4f4;

  @media screen and (min-width: 768px) {
    /* padding: 32px 9px 33px 32px; */
    width: 400px;
  }

  @media screen and (min-width: 1360px) {
    padding: 56px 28px 77px 20px;
    width: 690px;
  }
`;

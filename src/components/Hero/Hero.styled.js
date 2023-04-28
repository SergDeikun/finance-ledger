import styled from 'styled-components';

import ImgJpg from '../../images/img/home/showcase.jpg';
import ImgWebp from '../../images/img/home/showcase.webp';
import ImgRetinaJpg from '../../images/img/home/showcase@2x.jpg';
import ImgRetinaWebp from '../../images/img/home/showcase@2x.webp';

export const Section = styled.section`
  padding-top: 284px;
  padding-bottom: 185px;
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url(${ImgJpg});
  background-color: rgba(0, 0, 0, 0.9);

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  text-align: center;

  @supports (background-image: url(${ImgWebp})) {
    background-image: url(${ImgWebp});
  }

  @media screen and (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
    background-image: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.5)
      ),
      url(${ImgRetinaJpg});

    @supports (background-image: url(${ImgRetinaWebp})) {
      background-image: url(${ImgRetinaWebp});
    }
  }
`;

export const Title = styled.h1`
  font-family: ${p => p.theme.font.body};
  font-size: ${p => p.theme.fontSize[7]}px;
  font-weight: ${p => p.theme.fontWeight.semiBold};
  font-style: normal;
  line-height: 1.35;
  color: ${p => p.theme.colors.whiteFont};
  width: 241px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSize[8]}px;
    line-height: 1.36;
    width: 523px;
  }
`;

export const HeroText = styled.p`
  font-family: ${p => p.theme.font.body};
  font-size: ${p => p.theme.fontSize[3]}px;
  font-weight: ${p => p.theme.fontWeight.regular};
  font-style: normal;
  line-height: 1.23;
  color: ${p => p.theme.colors.whiteFont};
  margin-top: 16px;

  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSize[7]}px;
    line-height: 1.2;
    width: 523px;
    margin: 0 auto;
  }

  @media screen and (min-width: 1360px) {
    line-height: 1.35;
    width: 798px;
  }
`;

export const HeroBtn = styled.button`
  display: flex;
  align-items: center;
  margin-top: 24px;
  margin-left: auto;
  margin-right: auto;
  padding: 16px 32px;
  border-radius: 5px;
  border: none;
  font-family: ${p => p.theme.font.body};
  font-size: ${p => p.theme.fontSize[1]}px;
  font-weight: ${p => p.theme.fontWeight.regular};
  font-style: normal;
  line-height: 1.39;
  color: ${p => p.theme.colors.whiteFont};
  background-color: ${p => p.theme.colors.green};
`;

export const IconBtn = styled.img`
  width: 9px;
  height: 18px;
  margin-right: 8px;
`;

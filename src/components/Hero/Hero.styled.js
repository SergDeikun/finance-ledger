import styled from 'styled-components';

import ImgJpg from '../../images/home/showcase.jpg';
import ImgWebp from '../../images/home/showcase.webp';
import ImgRetinaJpg from '../../images/home/showcase@2x.jpg';
import ImgRetinaWebp from '../../images/home/showcase@2x.webp';

export const Section = styled.section`
  padding: 160px 0 104px 0;
  /* max-width: 1360px; */
  max-width: 100%;
  margin: auto;

  @media screen and (min-width: 768px) {
    padding: 378px 0;
  }

  @media screen and (min-width: 1360px) {
    width: 1360px;
    padding: 272px 0 270px 0;
  }

  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url(${ImgJpg});

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  text-align: center;

  @supports (background-image: url(${ImgWebp})) {
    background-image: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.5)
      ),
      url(${ImgWebp});
  }

  @media screen and (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
    background-image: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.5)
      ),
      url(${ImgRetinaJpg});

    @supports (background-image: url(${ImgRetinaWebp})) {
      background-image: linear-gradient(
          0deg,
          rgba(0, 0, 0, 0.5),
          rgba(0, 0, 0, 0.5)
        ),
        url(${ImgRetinaWebp});
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
  /* width: 241px; */
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

  &:hover {
    background-color: #2ebf4f;
  }
`;

export const IconBtn = styled.img`
  width: 9px;
  height: 18px;
  margin-right: 8px;
`;

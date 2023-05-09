import { useState, useEffect } from 'react';

import { dataImg } from '../../constans/dataImg';

import Container from '../../components/Container/Container';

import Prev from '../../images/gallery/prev.png';
import Next from '../../images/gallery/next.png';
import Close from '../../images/gallery/close.png';
import Preloader from '../../images/gallery/loading.gif';

import {
  Section,
  PreTitle,
  Title,
  Text,
  ListImages,
  ItemImage,
  ModalWindov,
  LightboxImg,
  PrevBtnWrap,
  PrevButton,
  NextBtnWrap,
  NextButton,
  CloseButton,
  PreloaderWrap,
} from './Cases.styled';

const Cases = () => {
  const [photoIndex, setPhotoIndex] = useState(null);
  const [photoURLs, setPhotoURLs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [photoIndex]);

  const handleNext = () => {
    if (photoIndex === photoURLs.length - 1) {
      setPhotoIndex(0);
    } else {
      setPhotoIndex(photoIndex + 1);
    }
  };

  const handlePrev = () => {
    if (photoIndex === 0) {
      setPhotoIndex(photoURLs.length - 1);
    } else {
      setPhotoIndex(photoIndex - 1);
    }
  };

  return (
    <Section id="cases">
      <Container id="cases">
        <PreTitle>This is what we do</PreTitle>
        <Title>Business Cases</Title>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
          sapiente!
        </Text>
        <ListImages>
          {dataImg.map(({ id, Img1j, Img1w, Img1x2j, Img1x2w, alt }, index) => {
            return (
              <ItemImage key={id}>
                <picture>
                  <source
                    type="image/webp"
                    srcSet={`${Img1w}  1x,  ${Img1x2w} 2x`}
                  />
                  <img
                    loading="lazy"
                    alt={alt}
                    src={Img1j}
                    srcSet={Img1x2j}
                    onClick={() => {
                      setPhotoIndex(index);
                      setPhotoURLs(dataImg.map(({ Img1j }) => Img1j));
                    }}
                  />
                </picture>
                {photoIndex !== null && (
                  <ModalWindov>
                    <PrevBtnWrap>
                      <PrevButton onClick={handlePrev}>
                        <img src={Prev} alt="prev" />
                      </PrevButton>
                    </PrevBtnWrap>

                    {isLoading ? (
                      <PreloaderWrap>
                        <img src={Preloader} alt="loader" />
                      </PreloaderWrap>
                    ) : (
                      <LightboxImg src={photoURLs[photoIndex]} alt="bigPhoto" />
                    )}

                    <NextBtnWrap>
                      <NextButton onClick={handleNext}>
                        <img src={Next} alt="next" />
                      </NextButton>
                    </NextBtnWrap>
                    <CloseButton
                      type="butto"
                      onClick={() => setPhotoIndex(null)}
                    >
                      <img src={Close} alt="close" />
                    </CloseButton>
                  </ModalWindov>
                )}
              </ItemImage>
            );
          })}
        </ListImages>
      </Container>
    </Section>
  );
};

export default Cases;

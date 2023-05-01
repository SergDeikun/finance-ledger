import { useState, useEffect } from 'react';
import { useCallback } from 'react';

import { dataImg } from '../../constans/dataImg';

import Container from 'components/Container/Container';
// import Modal from 'components/Modal/Modal';

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

  const handleNext = useCallback(() => {
    if (photoIndex === photoURLs.length - 1) {
      setPhotoIndex(0);
    } else {
      setPhotoIndex(photoIndex + 1);
    }
  });

  const handlePrev = useCallback(() => {
    if (photoIndex === 0) {
      setPhotoIndex(photoURLs.length - 1);
    } else {
      setPhotoIndex(photoIndex - 1);
    }
  });

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
          {dataImg.map(({ id, Img1j, Img1w, Img1x2j, Img1x2w }, index) => {
            return (
              <ItemImage key={id}>
                <picture>
                  <source
                    srcSet={`${Img1j} 1x,${Img1x2j} 2x`}
                    type="image/jpg"
                  />
                  <source
                    srcSet={`${Img1w} 1x,${Img1x2w} 2x`}
                    type="image/webp"
                  />

                  <img
                    src={Img1j}
                    alt="meeting"
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
                        <img src={Prev} alt="next" />
                      </PrevButton>
                    </PrevBtnWrap>

                    {isLoading ? (
                      <PreloaderWrap>
                        <img src={Preloader} alt="loader" />
                      </PreloaderWrap>
                    ) : (
                      <LightboxImg src={photoURLs[photoIndex]} alt="" />
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
                      <img src={Close} alt="" />
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

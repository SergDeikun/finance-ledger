import Container from 'components/Container/Container';
// 1
import Img1j from '../../images/cases/cases1.jpg';
import Img1w from '../../images/cases/cases1.webp';
import Img1x2j from '../../images/cases/cases1@2x.jpg';
import Img1x2w from '../../images/cases/cases1@2x.webp';
// 2
import Img2j from '../../images/cases/cases3.jpg';
import Img2w from '../../images/cases/cases3.webp';
import Img2x2j from '../../images/cases/cases3@2x.jpg';
import Img2x2w from '../../images/cases/cases3@2x.webp';
// 3
import Img3j from '../../images/cases/cases5.jpg';
import Img3w from '../../images/cases/cases5.webp';
import Img3x2j from '../../images/cases/cases5@2x.jpg';
import Img3x2w from '../../images/cases/cases5@2x.webp';
// 4
import Img4j from '../../images/cases/cases7.jpg';
import Img4w from '../../images/cases/cases7.webp';
import Img4x2j from '../../images/cases/cases7@2x.jpg';
import Img4x2w from '../../images/cases/cases7@2x.webp';
// 5
import Img5j from '../../images/cases/cases2.jpg';
import Img5w from '../../images/cases/cases2.webp';
import Img5x2j from '../../images/cases/cases2@2x.jpg';
import Img5x2w from '../../images/cases/cases2@2x.webp';
// 6
import Img6j from '../../images/cases/cases4.jpg';
import Img6w from '../../images/cases/cases4.webp';
import Img6x2j from '../../images/cases/cases4@2x.jpg';
import Img6x2w from '../../images/cases/cases4@2x.webp';

import {
  Section,
  PreTitle,
  Title,
  Text,
  ListImages,
  ItemImage,
} from './Cases.styled';

const Cases = () => {
  return (
    <Section>
      <Container id="cases">
        <PreTitle>This is what we do</PreTitle>
        <Title>Business Cases</Title>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
          sapiente!
        </Text>
        <ListImages>
          <ItemImage>
            <picture>
              <source srcSet={Img1j} type="image/jpg" />
              <source srcSet={Img1w} type="image/webp" />
              <source srcSet={Img1x2j} type="image/jpg" />
              <source srcSet={Img1x2w} type="image/webp" />
              <img src={Img1j} alt="people" />
            </picture>
          </ItemImage>
          <ItemImage>
            <picture>
              <source srcSet={Img2j} type="image/jpg" />
              <source srcSet={Img2w} type="image/webp" />
              <source srcSet={Img2x2j} type="image/jpg" />
              <source srcSet={Img2x2w} type="image/webp" />
              <img src={Img2j} alt="people" />
            </picture>
          </ItemImage>
          <ItemImage>
            <picture>
              <source srcSet={Img3j} type="image/jpg" />
              <source srcSet={Img3w} type="image/webp" />
              <source srcSet={Img3x2j} type="image/jpg" />
              <source srcSet={Img3x2w} type="image/webp" />
              <img src={Img3j} alt="people" />
            </picture>
          </ItemImage>
          <ItemImage>
            <picture>
              <source srcSet={Img4j} type="image/jpg" />
              <source srcSet={Img4w} type="image/webp" />
              <source srcSet={Img4x2j} type="image/jpg" />
              <source srcSet={Img4x2w} type="image/webp" />
              <img src={Img4j} alt="people" />
            </picture>
          </ItemImage>
          <ItemImage>
            <picture>
              <source srcSet={Img5j} type="image/jpg" />
              <source srcSet={Img5w} type="image/webp" />
              <source srcSet={Img5x2j} type="image/jpg" />
              <source srcSet={Img5x2w} type="image/webp" />
              <img src={Img5j} alt="people" />
            </picture>
          </ItemImage>
          <ItemImage>
            <picture>
              <source srcSet={Img6j} type="image/jpg" />
              <source srcSet={Img6w} type="image/webp" />
              <source srcSet={Img6x2j} type="image/jpg" />
              <source srcSet={Img6x2w} type="image/webp" />
              <img src={Img6j} alt="people" />
            </picture>
          </ItemImage>
        </ListImages>
      </Container>
    </Section>
  );
};

export default Cases;

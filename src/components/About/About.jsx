import ImgJpg from '../../images/home/people.jpg';
import ImgWebp from '../../images/home/people.webp';
import ImgRetinaJpg from '../../images/home/people@2x.jpg';
import ImgRetinaWebp from '../../images/home/people@2x.webp';

import {
  Container,
  Image,
  Wrapper,
  PreTitle,
  Title,
  Text,
  Btn,
} from './About.styled';

const About = () => {
  return (
    <section id="about">
      <Container>
        <picture>
          <source srcSet={ImgJpg} type="image/jpg" />
          <source srcSet={ImgWebp} type="image/webp" />
          <source srcSet={ImgRetinaJpg} type="image/jpg" />
          <source srcSet={ImgRetinaWebp} type="image/webp" />
          <Image src={ImgJpg} alt="people" />
        </picture>
        <Wrapper>
          <PreTitle>What you are looking for</PreTitle>
          <Title>We provide bespoke solutions</Title>
          <Text>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
            ipsum dignissimos quae laudantium asperiores nam aliquid impedit
            harum illum dolore explicabo ab dolores itaque rerum temporibus
            doloribus iste maiores deleniti?
          </Text>
          <Btn type="button" title="Read More" />
        </Wrapper>
      </Container>
    </section>
  );
};

export default About;

// import Container from 'components/Container/Container';

import ImgJpg from '../../images/home/people.jpg';
import ImgWebp from '../../images/home/people.webp';
import ImgRetinaJpg from '../../images/home/people@2x.jpg';
import ImgRetinaWebp from '../../images/home/people@2x.webp';

import {
  Section,
  Container,
  Wrapper,
  PreTitle,
  Title,
  Text,
  Button,
} from './About.styled';

const About = () => {
  return (
    <Section id="about">
      <Container>
        <picture>
          <source srcSet={ImgJpg} type="image/jpg" />
          <source srcSet={ImgWebp} type="image/webp" />
          <source srcSet={ImgRetinaJpg} type="image/jpg" />
          <source srcSet={ImgRetinaWebp} type="image/webp" />
          <img src={ImgJpg} alt="people" />
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
          <Button type="button">Read More</Button>
        </Wrapper>
      </Container>
    </Section>
  );
};

export default About;

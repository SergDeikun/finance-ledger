import Container from 'components/Container/Container';
import NextIcon from '../../images/icons/fa-solid_angle-right.svg';

import { Section, Title, HeroText, HeroBtn, IconBtn } from './Hero.styled';

const Hero = () => {
  return (
    <Section>
      <Container>
        <Title>The Sky Is The Limit</Title>
        <HeroText>We provide world class financial assistance</HeroText>
        <HeroBtn type="button">
          <IconBtn src={NextIcon} alt="icon" />
          Read More
        </HeroBtn>
      </Container>
    </Section>
  );
};

export default Hero;

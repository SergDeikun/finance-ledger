import Container from '../../components/Container/Container';
import NextIcon from '../../images/icons/fa-solid_angle-right.svg';

import { Section, Title, HeroText, Btn, IconBtn } from './Hero.styled';

const Hero = () => {
  return (
    <Section id="home">
      <Container>
        <Title>The Sky Is The Limit</Title>
        <HeroText>We provide world class financial assistance</HeroText>
        <Btn type="button" title="Read More">
          <IconBtn src={NextIcon} alt="icon" />
        </Btn>
      </Container>
    </Section>
  );
};

export default Hero;

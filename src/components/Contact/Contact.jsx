import Container from 'components/Container/Container';

import ImgJpg from '../../images/home/contact.jpg';
import ImgWebp from '../../images/home/contact.webp';
import ImgRetinaJpg from '../../images/home/contact@2x.jpg';
import ImgRetinaWebp from '../../images/home/contact@2x.webp';

import { Section, Title, Wrapper } from './Contact.styled';

const Contact = () => {
  return (
    <Section>
      <Container>
        <picture>
          <source srcSet={ImgJpg} type="image/jpg" />
          <source srcSet={ImgWebp} type="image/webp" />
          <source srcSet={ImgRetinaJpg} type="image/jpg" />
          <source srcSet={ImgRetinaWebp} type="image/webp" />
          <img src={ImgJpg} alt="people" />
        </picture>
        <Wrapper>
          <Title>Request Callback</Title>
          <form action="">
            <label htmlFor="">
              <input type="text" />
            </label>
            <label htmlFor="">
              <input type="text" />
            </label>
            <button type="submit">Send</button>
          </form>
        </Wrapper>
      </Container>
    </Section>
  );
};

export default Contact;

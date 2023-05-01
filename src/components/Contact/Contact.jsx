import Container from '../../components/Container/Container';
import Form from '../../components/Form/Form';
import ImgJpg from '../../images/home/contact.jpg';
import ImgWebp from '../../images/home/contact.webp';
import ImgRetinaJpg from '../../images/home/contact@2x.jpg';
import ImgRetinaWebp from '../../images/home/contact@2x.webp';

import { Box, Img, WrapperForm } from './Contact.styled';

const Contact = () => {
  return (
    <section id="contact">
      <Container>
        <Box>
          <picture>
            <source srcSet={ImgJpg} type="image/jpg" />
            <source srcSet={ImgWebp} type="image/webp" />
            <source srcSet={ImgRetinaJpg} type="image/jpg" />
            <source srcSet={ImgRetinaWebp} type="image/webp" />
            <Img src={ImgJpg} alt="men" />
          </picture>

          <WrapperForm>
            <Form />
          </WrapperForm>
        </Box>
      </Container>
    </section>
  );
};

export default Contact;

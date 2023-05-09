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
            <source
              type="image/webp"
              srcSet={`${ImgWebp}  1x,  ${ImgRetinaWebp} 2x`}
            />
            <Img loading="lazy" alt="men" src={ImgJpg} srcSet={ImgRetinaJpg} />
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

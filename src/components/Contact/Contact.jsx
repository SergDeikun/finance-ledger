import Container from 'components/Container/Container';

import { Section } from './Contact.styled';

const Contact = () => {
  return (
    <Section>
      <Container>
        <h2>Request Callback</h2>
        <form action="">
          <label htmlFor="">
            <input type="text" />
          </label>
          <label htmlFor="">
            <input type="text" />
          </label>
          <button type="submit">Send</button>
        </form>
      </Container>
    </Section>
  );
};

export default Contact;

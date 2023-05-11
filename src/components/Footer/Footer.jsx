import Container from '../../components/Container/Container';

import { FooterBox, Text, SocialListIcon } from './Footer.styled';

const Footer = () => {
  return (
    <FooterBox>
      <Container>
        <SocialListIcon />
        <Text>Copyright © 2021 - FinanceLedger</Text>
      </Container>
    </FooterBox>
  );
};

export default Footer;

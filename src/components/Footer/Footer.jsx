import Container from '../../components/Container/Container';
import SocialList from '../../components/SocialList/SocialList';

import { FooterBox, Text } from './Footer.styled';

const Footer = () => {
  return (
    <FooterBox>
      <Container>
        <SocialList />
        <Text>Copyright © 2021 - FinanceLedger</Text>
      </Container>
    </FooterBox>
  );
};

export default Footer;

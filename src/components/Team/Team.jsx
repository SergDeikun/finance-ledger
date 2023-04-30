import Container from 'components/Container/Container';
// 1
import Img1j from '../../images/team/person1.jpg';
import Img1w from '../../images/team/person1.webp';
import Img1x2j from '../../images/team/person1@2x.jpg';
import Img1x2w from '../../images/team/person1@2x.jpg';
// 2
import Img2j from '../../images/team/person2.jpg';
import Img2w from '../../images/team/person2.webp';
import Img2x2j from '../../images/team/person2@2x.jpg';
import Img2x2w from '../../images/team/person2@2x.jpg';
// 3
import Img3j from '../../images/team/person3.jpg';
import Img3w from '../../images/team/person3.webp';
import Img3x2j from '../../images/team/person3@2x.jpg';
import Img3x2w from '../../images/team/person3@2x.jpg';

import {
  Section,
  PreTitle,
  Title,
  Text,
  TeamList,
  TeamItem,
  Picture,
  Img,
  Name,
  Position,
} from './Team.styled';

const Team = () => {
  return (
    <Section>
      <Container>
        <PreTitle>Who we are</PreTitle>
        <Title>Our Professional Team</Title>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
          sapiente!
        </Text>

        <TeamList>
          <TeamItem>
            <Picture>
              <source srcSet={Img1j} type="image/jpg" />
              <source srcSet={Img1w} type="image/webp" />
              <source srcSet={Img1x2j} type="image/jpg" />
              <source srcSet={Img1x2w} type="image/webp" />
              <Img src={Img1j} alt="President" />
            </Picture>
            <Name>John Doe</Name>
            <Position>President</Position>
          </TeamItem>
          <TeamItem>
            <Picture>
              <source srcSet={Img2j} type="image/jpg" />
              <source srcSet={Img2w} type="image/webp" />
              <source srcSet={Img2x2j} type="image/jpg" />
              <source srcSet={Img2x2w} type="image/webp" />
              <Img src={Img2j} alt="Vice President" />
            </Picture>
            <Name>Jane Doe</Name>
            <Position>Vice President</Position>
          </TeamItem>
          <TeamItem>
            <Picture>
              <source srcSet={Img3j} type="image/jpg" />
              <source srcSet={Img3w} type="image/webp" />
              <source srcSet={Img3x2j} type="image/jpg" />
              <source srcSet={Img3x2w} type="image/webp" />
              <Img src={Img3j} alt="Marketing Head" />
            </Picture>
            <Name>Steve Smith</Name>
            <Position>Marketing Head</Position>
          </TeamItem>
        </TeamList>
      </Container>
    </Section>
  );
};

export default Team;

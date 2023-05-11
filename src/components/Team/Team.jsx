import Container from '../../components/Container/Container';
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
  ThumbImg,
  Img,
  Name,
  Position,
  SocialIcons,
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
            {/* 1 */}
            <ThumbImg>
              <picture>
                <source
                  type="image/webp"
                  srcSet={`${Img1w}  1x,  ${Img1x2w} 2x`}
                />
                <Img
                  loading="lazy"
                  alt="John Doe"
                  src={Img1j}
                  srcSet={Img1x2j}
                />
              </picture>
              <SocialIcons />
            </ThumbImg>
            <Name>John Doe</Name>
            <Position>President</Position>
          </TeamItem>
          {/* 2 */}
          <TeamItem>
            <ThumbImg>
              <picture>
                <source
                  type="image/webp"
                  srcSet={`${Img2w}  1x,  ${Img2x2w} 2x`}
                />
                <Img
                  loading="lazy"
                  alt="Jane Doe"
                  src={Img2j}
                  srcSet={Img2x2j}
                />
              </picture>
              <SocialIcons />
            </ThumbImg>
            <Name>Jane Doe</Name>
            <Position>Vice President</Position>
          </TeamItem>
          {/* 3 */}
          <TeamItem>
            <ThumbImg>
              <picture>
                <source
                  type="image/webp"
                  srcSet={`${Img3w}  1x,  ${Img3x2w} 2x`}
                />
                <Img
                  loading="lazy"
                  alt="Steve Smith"
                  src={Img3j}
                  srcSet={Img3x2j}
                />
              </picture>
              <SocialIcons />
            </ThumbImg>

            <Name>Steve Smith</Name>
            <Position>Marketing Head</Position>
          </TeamItem>
        </TeamList>
      </Container>
    </Section>
  );
};

export default Team;

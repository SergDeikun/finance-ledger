import ImgJpg from '../../images/home/blog.jpg';
import ImgWebp from '../../images/home/blog.webp';
import ImgRetinaJpg from '../../images/home/blog@2x.jpg';
import ImgRetinaWebp from '../../images/home/blog@2x.webp';

import {
  Section,
  Container,
  Image,
  Wrapper,
  Date,
  Title,
  Text,
  Button,
} from './Blog.styled';

const Blog = () => {
  return (
    <section id="blog">
      <Container>
        <picture>
          <source srcSet={ImgJpg} type="image/jpg" />
          <source srcSet={ImgWebp} type="image/webp" />
          <source srcSet={ImgRetinaJpg} type="image/jpg" />
          <source srcSet={ImgRetinaWebp} type="image/webp" />
          <Image src={ImgJpg} alt="blog" />
        </picture>
        <Wrapper>
          <Date>April 16 2020</Date>
          <Title>Blog Post One</Title>
          <Text>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
            ipsum dignissimos quae laudantium asperiores nam aliquid impedit
            harum illum dolore explicabo ab dolores itaque rerum temporibus
            doloribus iste maiores deleniti?
          </Text>
          <Button type="button">Read Our Blog</Button>
        </Wrapper>
      </Container>
    </section>
  );
};

export default Blog;

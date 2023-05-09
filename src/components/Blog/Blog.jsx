import ImgJpg from '../../images/home/blog.jpg';
import ImgWebp from '../../images/home/blog.webp';
import ImgRetinaJpg from '../../images/home/blog@2x.jpg';
import ImgRetinaWebp from '../../images/home/blog@2x.webp';

import {
  Container,
  Image,
  Wrapper,
  Date,
  Title,
  Text,
  Btn,
} from './Blog.styled';

const Blog = () => {
  return (
    <section id="blog">
      <Container>
        <picture>
          <source
            type="image/webp"
            srcSet={`${ImgWebp}  1x,  ${ImgRetinaWebp} 2x`}
          />
          <Image loading="lazy" alt="note" src={ImgJpg} srcSet={ImgRetinaJpg} />
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
          <Btn type="button" title="Read Our Blog" />
        </Wrapper>
      </Container>
    </section>
  );
};

export default Blog;

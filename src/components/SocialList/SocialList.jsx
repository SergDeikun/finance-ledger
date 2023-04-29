import {
  List,
  Item,
  FacebookIcon,
  TwitterIcon,
  YouTubeIcon,
  LinkEdinIcon,
} from './SocialList.styled';

const SocialList = () => {
  return (
    <>
      <List>
        <Item>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon />
          </a>
        </Item>
        <Item>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon />
          </a>
        </Item>
        <Item>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <YouTubeIcon />
          </a>
        </Item>
        <Item>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkEdinIcon />
          </a>
        </Item>
      </List>
    </>
  );
};

export default SocialList;

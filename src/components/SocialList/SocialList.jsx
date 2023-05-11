import {
  List,
  Item,
  LinkItem,
  FacebookIcon,
  TwitterIcon,
  YouTubeIcon,
  LinkEdinIcon,
} from './SocialList.styled';

const SocialList = ({ className }) => {
  return (
    <>
      <List className={className || ''}>
        <Item>
          <LinkItem
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon />
          </LinkItem>
        </Item>
        <Item>
          <LinkItem
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon />
          </LinkItem>
        </Item>
        <Item>
          <LinkItem
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <YouTubeIcon />
          </LinkItem>
        </Item>
        <Item>
          <LinkItem
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkEdinIcon />
          </LinkItem>
        </Item>
      </List>
    </>
  );
};

export default SocialList;

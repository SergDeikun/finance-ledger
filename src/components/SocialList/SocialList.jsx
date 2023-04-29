import FacebookIcon from '../../images/icons/facebook.svg';
import TwitterIcon from '../../images/icons/twitter.svg';
import YouTubeIcon from '../../images/icons/youtube.svg';
import LinkEdinIcon from '../../images/icons/linkedin.svg';

import {
  List,
  Item,
  FbIcon,
  TwIcon,
  YoIcon,
  LiIcon,
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
            <FbIcon src={FacebookIcon} alt="Facebook" />
          </a>
        </Item>
        <Item>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwIcon src={TwitterIcon} alt="Twitter" />
          </a>
        </Item>
        <Item>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <YoIcon src={YouTubeIcon} alt="YouTube" />
          </a>
        </Item>
        <Item>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LiIcon src={LinkEdinIcon} alt="LinkEdin" />
          </a>
        </Item>
      </List>
    </>
  );
};

export default SocialList;

import LogoIcon from '../../images/icons/LogoIcon.svg';
import { Wrapper, Icon, LogoText, GreenText } from './Logo.styled';

const Logo = () => {
  return (
    <Wrapper>
      <Icon src={LogoIcon} alt="logo" />
      <LogoText>
        <GreenText>Finance</GreenText> Ledger
      </LogoText>
    </Wrapper>
  );
};

export default Logo;

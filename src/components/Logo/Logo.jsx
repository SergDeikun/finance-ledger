import { Link, LogoIcon, LogoText, GreenText } from './Logo.styled';

const Logo = () => {
  return (
    <>
      <Link>
        <LogoIcon />
        <LogoText>
          <GreenText>Finance</GreenText> Ledger
        </LogoText>
      </Link>
    </>
  );
};

export default Logo;

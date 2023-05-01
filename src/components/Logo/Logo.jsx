import { Link, LogoBox, LogoText, GreenText } from './Logo.styled';

const Logo = () => {
  return (
    <>
      <Link>
        <LogoBox></LogoBox>
        {/* <LogoIcon /> */}
        <LogoText>
          <GreenText>Finance</GreenText> Ledger
        </LogoText>
      </Link>
    </>
  );
};

export default Logo;

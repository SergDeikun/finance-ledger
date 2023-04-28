import Logo from '../Logo/Logo';

import {
  Container,
  HeaderBox,
  Navigation,
  NavList,
  NavItem,
  NavLink,
} from './Header.styled';

const Header = () => {
  return (
    <HeaderBox id="home">
      <Container>
        <Logo />
        <Navigation>
          <NavList>
            <NavItem>
              <NavLink href="#home">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#cases">Cases</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#blog">Blog</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#contact">Contact</NavLink>
            </NavItem>
          </NavList>
        </Navigation>
      </Container>
    </HeaderBox>
  );
};

export default Header;

import { useState, useEffect } from 'react';

import Container from '../Container/Container';
import Logo from '../Logo/Logo';

import {
  HeaderBox,
  Navigation,
  NavList,
  NavItem,
  NavLink,
} from './Header.styled';

const Header = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;

      setScroll(position);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const opacity = scroll < 70 ? 0 : 0.8;

  return (
    <HeaderBox opacity={opacity}>
      <Container>
        <Navigation>
          <Logo />

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

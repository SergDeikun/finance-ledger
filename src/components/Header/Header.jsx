import { NavLink } from './Header.styled';

const Header = () => {
  return (
    <header id="home">
      <p>
        <span>Finanse</span> Ledger
      </p>
      <nav>
        <ul>
          <li>
            <NavLink href="#home">Home</NavLink>
          </li>
          <li>
            <NavLink href="#about">About</NavLink>
          </li>
          <li>
            <NavLink href="#cases">Cases</NavLink>
          </li>
          <li>
            <NavLink href="#blog">Blog</NavLink>
          </li>
          <li>
            <NavLink href="#contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

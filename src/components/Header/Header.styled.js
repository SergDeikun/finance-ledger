import styled from 'styled-components';
// import { device } from '../../constans/theme';

export const HeaderBox = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  /* height: 98px; */
  /* background-color: rgba(0, 0, 0, 0.5); */
  /* padding: 22px 22px 0 22px; */
`;

// export const Container = styled(ContainerWrapper)`
//   /* padding: 22px 22px 0 22px; */
//   @media screen and (min-width: 768px) {
//     display: flex;
//     align-items: center;
//   }
// `;

export const Navigation = styled.nav`
  padding: 22px;

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    padding: 23px 32px 23px 32px;
  }

  @media screen and (min-width: 1360px) {
    padding: 32px 28px 0 28px;
  }
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 767px) {
    margin-top: 16px;
  }

  @media screen and (min-width: 768px) {
    margin-left: auto;
  }
`;

export const NavItem = styled.li`
  &:not(:first-child) {
    margin-left: 12px;
  }

  @media screen and (min-width: 768px) {
    &:not(:first-child) {
      margin-left: 20px;
    }
  }

  @media screen and (min-width: 1360px) {
    &:not(:first-child) {
      margin-left: 40px;
    }
  }
`;

export const NavLink = styled.a`
  position: relative;
  font-family: ${p => p.theme.font.body};
  font-weight: ${p => p.theme.fontWeight.regular};
  font-size: ${p => p.theme.fontSize[0]}px;
  font-style: normal;
  line-height: 1.36;
  color: ${p => p.theme.colors.whiteFont};

  &:hover {
    ::after {
      content: ' ';
      position: absolute;
      left: 0;
      bottom: -10px;
      width: 100%;
      height: 2px;
      color: red;
      background-color: ${p => p.theme.colors.green};
    }
  }

  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSize[1]}px;
    line-height: 1.39;
  }
`;

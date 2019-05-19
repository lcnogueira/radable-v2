import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav.attrs({
  className: 'navbar navbar-expand-sm bg-info navbar-dark',
})``;

export const NavbarNav = styled.ul.attrs({
  className: 'navbar-nav',
})``;

export const NavbarBrand = styled.ul.attrs({
  className: 'navbar-brand',
})`
  font-weight: bold;
`;

export const NavItem = styled.li.attrs({
  className: 'nav-item',
})`
  margin-left: 10px;

  :hover {
    opacity: 0.7;
  }
`;

export const NavLink = styled.span.attrs({
  className: 'nav-link active',
})``;

export const StyledLink = styled(Link)`
  :hover {
    text-decoration: none;
    opacity: 0.7;
    background-color: red;
  }
`;

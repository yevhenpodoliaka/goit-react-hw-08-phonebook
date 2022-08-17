import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

 export const NavItem = styled(NavLink)`
  padding: 8px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  &.active {
    background-color: blue;
    color: white;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: blue;
  }
`;
export const Header= styled.header`
  display:flex;
  align-items:center;
  justify-content:space-around;
  height: 60px;

`
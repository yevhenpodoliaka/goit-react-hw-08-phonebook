import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavItem = styled(NavLink)`
  text-decoration: none;
  color: black;
  padding: 8px;
  &.active {
    color: blue;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: blue;
  }
`;
export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 60px;
  background-color: #f1f1f1;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const UserWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;
export const LogOutBtn = styled.button`
  padding: 4px;
  background-color: grey;
  color: black;
  border-radius: 4px;
  &:hover {
    background-color: blue;
    color: white;
  }
`;

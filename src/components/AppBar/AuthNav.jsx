import { NavItem } from './AppBar.styled';

export default function AuthNav() {
  return (
    <div>
      <NavItem to="/register">Registration</NavItem>
      <NavItem to="/login">Login</NavItem>
    </div>
  );
}

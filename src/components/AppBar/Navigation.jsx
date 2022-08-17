import { NavItem } from "./AppBar.styled";

export default function Navigation () {
  return (
    <nav>
        <NavItem to="/">Home</NavItem>
        <NavItem to="/contacts">Contacts</NavItem>
      </nav>
  
  );
};

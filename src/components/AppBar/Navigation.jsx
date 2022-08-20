import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../redux/auth/authSelector';
import { NavItem } from './AppBar.styled';

export default function Navigation() {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <nav>
      <NavItem to="/">Home</NavItem>
      {isLoggedIn && <NavItem to="/contacts">Contacts</NavItem>}
    </nav>
  );
}

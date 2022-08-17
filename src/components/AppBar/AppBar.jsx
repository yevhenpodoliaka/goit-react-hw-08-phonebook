import Navigation from './Navigation';
import AuthNav from './AuthNav';
import UserMenu from './UserMenu';
import { Header } from './AppBar.styled';

export default function AppBar() {
  return (
    <Header>
      <Navigation />
          <AuthNav />
          <UserMenu/>
    </Header>
  );
}

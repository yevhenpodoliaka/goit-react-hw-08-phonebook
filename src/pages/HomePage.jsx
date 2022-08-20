import { useSelector } from 'react-redux';
import { getUserName, getIsLoggedIn } from '../redux/auth/authSelector';

export default function HomePage() {
  const userName = useSelector(getUserName);
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <main>
      <h2>HomePage</h2>
      {!isLoggedIn && (
        <p>
          Welcome!!! to work with the application you need to register or log in
        </p>
      )}
      {isLoggedIn && <p>Welcome, {userName} to the contacts book application</p>}
    </main>
  );
}

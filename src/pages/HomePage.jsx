import { useSelector } from "react-redux";
import { getUserName, getIsLoggedIn } from '../redux/auth/authSelector';



export default function HomePage() {
  const userName = useSelector(getUserName);
   const isLoggedIn = useSelector(getIsLoggedIn);
  

  return (
    <>
      <h2>HomePage</h2>
      {!isLoggedIn && <p>Loin or Register</p>}
      {isLoggedIn && <p>Hello {userName}</p>}
    </>
  );
  
}

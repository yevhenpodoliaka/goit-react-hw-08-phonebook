import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../redux/auth/authSelector';

const PublicRoute = ({ children, restricted = false }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;

  return (
    <>
      {shouldRedirect ? <Navigate to="/contacts" replace={true} /> : children}
    </>
  );
};

export default PublicRoute;

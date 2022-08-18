import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import { fetchCurrentUser } from 'redux/auth/authOptions';

const HomePage = lazy(() => import('../pages/HomePage'));
const ContactListPage = lazy(() => import('../pages/ContactsListPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

export const App = () => {

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchCurrentUser());
    }, [dispatch]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index="/" element={<HomePage />} />
          <Route path="contacts" element={<ContactListPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';

const HomePage = lazy(() => import('../pages/HomePage'));
const ContactListPage = lazy(() => import('../pages/ContactsListPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

export const App = () => {
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

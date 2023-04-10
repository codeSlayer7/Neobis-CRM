import { Route, Routes } from 'react-router-dom';
import LogIn from '../pages/Auth/LogIn';
import ForgotPassword from '../pages/Auth/ForgotPassword';
import Confirmation from '../pages/Auth/Confirmation';
import ChangePassword from '../pages/Auth/ChangePassword';
import Client from './client';
import Admin from './admin';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<LogIn />} />
      <Route path="/forgot" element={<ForgotPassword />} />
      <Route path="/confirmation" element={<Confirmation />} />
      <Route path="/change-password" element={<ChangePassword />} />
      <Route path="/*" element={<Client />} />
      <Route path="/admin/*" element={<Admin />} />
    </Routes>
  );
}

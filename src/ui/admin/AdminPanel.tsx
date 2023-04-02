import { Route, Routes } from 'react-router-dom';
import UserPage from './pages/UserPage';
import { RouteWrapperAdmin } from '../../App';
import CreateUser from './components/Modals/CreateUser';
import Analytics from './pages/Analytics/Analytics';


export default function AdminPanel() {
  return (
    <RouteWrapperAdmin>
      <Routes>
        <Route index element={<UserPage />} />
        <Route path="createUser" element={<CreateUser />} />
        <Route path="analytics" element={<Analytics />} />
      </Routes>
    </RouteWrapperAdmin>
  );
}

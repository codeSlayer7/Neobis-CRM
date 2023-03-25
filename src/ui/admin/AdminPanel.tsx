import { Route, Routes } from 'react-router-dom';
import UserPage from './UserPage';
import CreateUser from './Modals/CreateUser';
import { RouteWrapperAdmin } from '../../App';

export default function AdminPanel() {
  return (
    <RouteWrapperAdmin>
      <Routes>
        <Route index element={<UserPage />} />
        <Route path="admin/createUser" element={<CreateUser />} />
      </Routes>
    </RouteWrapperAdmin>
  );
}

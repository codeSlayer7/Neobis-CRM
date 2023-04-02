import { Outlet, Route, Routes } from 'react-router-dom';
// import UserPage from './Manager/UserPage';
import CreateUser from './Modals/CreateUser';
import { RouteWrapperAdmin } from '../../App';
import AdminMentors from './AdminMentors/AdminMentors';
import AdminCourses from './AdminCourses/AdminCourses';
// import AdminCourses from './AdminCourses/AdminCourses';

export default function AdminPanel() {
  return (
    <RouteWrapperAdmin>
      <Outlet />
      <Routes>
        <Route index element={<AdminCourses />} />
        <Route path="admin/createUser" element={<CreateUser />} />
        {/* <Route path="admin/adminMentors" element={<AdminMentors />} /> */}
      </Routes>
    </RouteWrapperAdmin>
  );
}

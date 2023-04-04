import { Route, Routes } from 'react-router-dom';
import CreateUser from '../admin/components/Modals/CreateUser';
import Analytics from '../admin/pages/Analytics/Analytics';
import AdminMentors from '../admin/pages/AdminMentors/AdminMentors';
import AdminMentorsDetails from '../admin/pages/AdminMentors/AdminMentorsDetails';
import AdminCourses from '../admin/pages/AdminCourses/AdminCourses';
import DropDownAdminCourses from '../admin/pages/AdminCourses/DropDownAdminCourses';
import NavbarAdmin from '../admin/components/NavbarAdmin/NavbarAdmin';
import SidebarAdmin from '../admin/components/SidebarAdmin/SidebarAdmin';
import AdminStudents from '../admin/pages/AdminStudents/AdminStudents';
import AdminArchive from '../admin/pages/AdminArchive/AdminArchive';
import UserPage from '../admin/pages/Manager/UserPage';

function RouteWrapperAdmin({ children }: any) {
  return (
    <>
      <NavbarAdmin />
      <div>
        <SidebarAdmin>{children}</SidebarAdmin>
      </div>
    </>
  );
}

export default function Admin() {
  return (
    <RouteWrapperAdmin>
      <div className="bg-[#F4F7FD] w-[100%]">
        <Routes>
          <Route index element={<UserPage />} />
          <Route path="createUser" element={<CreateUser />} />,
          <Route path="analytics" element={<Analytics />} />,
          <Route path="mentors" element={<AdminMentors />} />
          <Route path="mentor/details" element={<AdminMentorsDetails />} />
          <Route path="courses" element={<AdminCourses />} />
          <Route path="course/details" element={<DropDownAdminCourses />} />
          <Route path="students" element={<AdminStudents />} />
          <Route path="archive" element={<AdminArchive />} />
        </Routes>
      </div>
    </RouteWrapperAdmin>
  );
}

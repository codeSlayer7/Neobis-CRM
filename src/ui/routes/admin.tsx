import { Route, Routes } from 'react-router-dom';
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
import MentorArchive from '../admin/components/Modals/MentorArchive';
import MentorEdit from '../admin/components/Modals/MentorEdit';
import AdminGroups from '../admin/pages/AdminCourses/AdminGroups';
import HistoryTitle from '../admin/pages/HistoryOperation/history-title';

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
      <Routes>
        <Route index element={<UserPage />} />
        <Route path="analytics" element={<Analytics />} />,
        <Route path="mentors" element={<AdminMentors />} />
        <Route path="mentors/:id" element={<AdminMentorsDetails />} />
        <Route path="courses" element={<AdminCourses />} />
        <Route path="courses/:id" element={<AdminGroups />} />
        <Route path="course/details" element={<DropDownAdminCourses />} />
        <Route path="students" element={<AdminStudents />} />
        <Route path="archive" element={<AdminArchive />} />
        <Route path="mentor/mentorarchive" element={<MentorArchive />} />
        <Route path="mentor/mentoredit" element={<MentorEdit />} />
        <Route path="history" element={<HistoryTitle />} />

      </Routes>
    </RouteWrapperAdmin>
  );
}

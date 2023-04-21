import { Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';
import EnrollClient from '../components/Modals/EnrollClient';
import InfoModal from '../components/Modals/InfoModal';
import FullInfoModal from '../components/Modals/FullInfoModal';
import CreateCard from '../components/Forms/CreateCard';
import ArchiveClient from '../components/Modals/ArchiveClient';
import RejectionReason from '../components/Modals/RejectionReason';
import TrelloContainer from '../components/Trello-Container/Trello-container';
import Groups from '../pages/Groups/Groups';
import Courses from '../pages/Groups/Courses';
import Students from '../pages/Students';
import Mentors from '../pages/Mentors/Mentors';
import MentorsDetails from '../pages/Mentors/MentorsDetails/MentorsDetails';
import HistoryTitle from '../pages/HistoryOperation/history/history-title';
import Profile from '../pages/Profile/Profile';
import Archive from '../pages/Archive/Archive';

const RouteWrapper = ({ children }: any) => {
  return (
    <>
      <Navbar />
      <div>
        <Sidebar>{children}</Sidebar>
      </div>
    </>
  );
};

export default function Client() {
  return (
    <RouteWrapper>
      <Routes>
        <Route index element={<TrelloContainer />} />
        <Route path="enrollclient" element={<EnrollClient />} />
        <Route path="infomodal" element={<InfoModal />} />
        <Route path="fullinfomodal" element={<FullInfoModal />} />
        <Route path="createcard" element={<CreateCard />} />
        <Route path="groups" element={<Groups />} />
        <Route path="courses" element={<Courses />} />
        <Route path="students" element={<Students />} />
        <Route path="mentors" element={<Mentors />} />
        <Route path="mentorsdetails" element={<MentorsDetails />} />
        <Route path="profile" element={<Profile />} />
        <Route path="archive" element={<Archive />} />
        <Route path="history" element={<HistoryTitle />} />
      </Routes>
    </RouteWrapper>
  );
}

// import { useAppSelector } from './store/hook/hook';
import { Route, Routes } from 'react-router-dom';
import TrelloContainer from './ui/components/Trello-Container/Trello-container';
import './App.css';
import Sidebar from './ui/components/Sidebar/Sidebar';
import Students from './ui/pages/Students';
import Mentors from './ui/pages/Mentors/Mentors';
import Archive from './ui/pages/Archive/Archive';
import Analytics from './ui/pages/Analytics/Analytics';
import Navbar from './ui/components/Navbar/Navbar';
import ArchiveClient from './ui/components/Modals/ArchiveClient';
import EnrollClient from './ui/components/Modals/EnrollClient';
import RejectionReason from './ui/components/Modals/RejectionReason';
// import Groups from './ui/pages/Groups/Courses';
import InfoModal from './ui/components/Modals/InfoModal';
import FullInfoModal from './ui/components/Modals/FullInfoModal';
import CreateCard from './ui/components/Forms/CreateCard';
import MentorsDetails from './ui/pages/Mentors/MentorsDetails/MentorsDetails';
import Profile from './ui/pages/Profile/Profile';
import LogIn from './ui/pages/Auth/LogIn';
import ForgotPassword from './ui/pages/Auth/ForgotPassword';
import Confirmation from './ui/pages/Auth/Confirmation';
import ChangePassword from './ui/pages/Auth/ChangePassword';
import Courses from './ui/pages/Groups/Courses';
import Groups from './ui/pages/Groups/Groups';

function RouteWrapper({ children }: any) {
  return (
    <>
      <Navbar />
      <div>
        <Sidebar>{children}</Sidebar>
      </div>
    </>
  );
}
function App(): JSX.Element {
  // const columns = useAppSelector((trello) => trello.trello?.columns);
  return (
    <Routes>
      <Route path="/login" element={<LogIn />} />
      <Route path="/forgot" element={<ForgotPassword />} />
      <Route path="/confirmation" element={<Confirmation />} />
      <Route path="/change-password" element={<ChangePassword />} />

      <Route
        path="/enrollclient"
        element={
          <RouteWrapper>
            <EnrollClient />
          </RouteWrapper>
        }
      />
      <Route
        path="/infomodal"
        element={
          <RouteWrapper>
            <InfoModal />
          </RouteWrapper>
        }
      />
      <Route
        path="/fullinfomodal"
        element={
          <RouteWrapper>
            <FullInfoModal />
          </RouteWrapper>
        }
      />
      <Route
        path="/groups"
        element={
          <RouteWrapper>
            <Groups />
          </RouteWrapper>
        }
      />
      <Route
        path="/createcard"
        element={
          <RouteWrapper>
            <CreateCard />
          </RouteWrapper>
        }
      />
      <Route
        path="/"
        element={
          <RouteWrapper>
            <TrelloContainer />
          </RouteWrapper>
        }
      />
      <Route
        path="/archiveclient"
        element={
          <RouteWrapper>
            <ArchiveClient />
          </RouteWrapper>
        }
      />
      <Route
        path="/rejectionreason"
        element={
          <RouteWrapper>
            <RejectionReason />
          </RouteWrapper>
        }
      />
      <Route
        path="/courses"
        element={
          <RouteWrapper>
            <Courses />
          </RouteWrapper>
        }
      />
      <Route
        path="/students"
        element={
          <RouteWrapper>
            <Students />
          </RouteWrapper>
        }
      />
      <Route
        path="/mentors"
        element={
          <RouteWrapper>
            <Mentors />
          </RouteWrapper>
        }
      />
      <Route
        path="/mentorsdetails"
        element={
          <RouteWrapper>
            <MentorsDetails />
          </RouteWrapper>
        }
      />
      <Route
        path="/archive"
        element={
          <RouteWrapper>
            <Archive />
          </RouteWrapper>
        }
      />
      <Route
        path="/analytics"
        element={
          <RouteWrapper>
            <Analytics />
          </RouteWrapper>
        }
      />
      <Route
        path="/profile"
        element={
          <RouteWrapper>
            <Profile />
          </RouteWrapper>
        }
      />
    </Routes>
  );
}

export default App;

// import { useAppSelector } from './store/hook/hook';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Route, Routes } from 'react-router-dom';
import TrelloContainer from './ui/components/Trello-Container/Trello-container';
import './App.css';
import Sidebar from './ui/components/Sidebar/Sidebar';
import Students from './ui/pages/Students';
import Mentors from './ui/pages/Mentors/Mentors';
import Archive from './ui/pages/Archive/Archive';
// import Analytics from './ui/pages/Analytics/Analytics';
import Navbar from './ui/components/Navbar/Navbar';
import ArchiveClient from './ui/components/Modals/ArchiveClient';
import EnrollClient from './ui/components/Modals/EnrollClient';
import RejectionReason from './ui/components/Modals/RejectionReason';
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
import AdminPanel from './ui/admin/AdminPanel';
import CreateUser from './ui/admin/components/Modals/CreateUser';
import NavbarAdmin from './ui/admin/components/NavbarAdmin/NavbarAdmin';
import SidebarAdmin from './ui/admin/components/SidebarAdmin/SidebarAdmin';
import AdminMentorsDetails from './ui/admin/AdminMentors/AdminMentorsDetails';
import Groups from './ui/pages/Groups/Groups';
import HistoryTitle from './ui/pages/HistoryOperation/history/history-title';

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

const theme = createTheme({
  typography: {
    fontFamily: ['"Segoe UI"'],
  },
});

export function RouteWrapperAdmin({ children }: any) {
  return (
    <>
      <NavbarAdmin />
      <div>
        <SidebarAdmin>{children}</SidebarAdmin>
      </div>
    </>
  );
}
function App(): JSX.Element {
  // const columns = useAppSelector((trello) => trello.trello?.columns);
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/login" element={<LogIn />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/admin/*" element={<AdminPanel />} />
        <Route path="/createUser" element={<CreateUser />} />

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
          path="/groups"
          element={
            <RouteWrapper>
              <Groups />
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
          path="/adminmentorsdetails"
          element={
            <RouteWrapper>
              <AdminMentorsDetails />
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
        {/* <Route
          path="/analytics"
          element={
            <RouteWrapper>
              <Analytics />
            </RouteWrapper>
          }
        /> */}
        <Route
          path="/profile"
          element={
            <RouteWrapper>
              <Profile />
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
          path="/history"
          element={
            <RouteWrapper>
              <HistoryTitle />
            </RouteWrapper>
          }
        />
      </Routes>
    </ThemeProvider>
  );
}

export default App;

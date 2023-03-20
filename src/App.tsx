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
import NativeSelectInput from '@mui/material/NativeSelect/NativeSelectInput';
import Groups from './ui/pages/Groups';
// import LogIn from './ui/pages/Auth/LogIn';
// import ForgotPassword from './ui/pages/Auth/ForgotPassword';
// import Confirmation from './ui/pages/Auth/Confirmation';
// import ChangePassword from './ui/pages/Auth/ChangePassword';

function App(): JSX.Element {
  // const columns = useAppSelector((trello) => trello.trello?.columns);
  return (
    <>
      {/* <LogIn /> */}
      {/* <ForgotPassword /> */}
      {/* <Confirmation /> */}
      {/* <ChangePassword /> */}
      <Navbar />
      <div>
        <Sidebar>
          <Routes>
            <Route path="/enrollclient" element={<EnrollClient />} />
            <Route path="/" element={<TrelloContainer />} />
            <Route path="/archive" element={<Archive />} />
            <Route path="/rejectionreason" element={<RejectionReason />} />
            <Route path="/groups" element={<Groups />} />
            <Route path="/students" element={<Students />} />
            <Route path="/mentors" element={<Mentors />} />
            <Route path="/analytics" element={<Analytics />} />
          </Routes>
        </Sidebar>
      </div>
    </>
  );
}

export default App;

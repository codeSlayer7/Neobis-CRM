// import { useAppSelector } from './store/hook/hook';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './ui/components/Navbar/Navbar';
import Sidebar from './ui/components/Sidebar/Sidebar';
import Applications from './ui/components/pages/Applications/Applications';
import Groups from './ui/components/pages/Groups/Groups';
import Students from './ui/components/pages/Students/Students';
import Mentors from './ui/components/pages/Mentors/Mentors';
import Archive from './ui/components/pages/Archive/Archive';
import Analytics from './ui/components/pages/Analytics/Analytics';

function App(): JSX.Element {
  // const columns = useAppSelector((trello) => trello.trello?.columns);
  return (
    <>
      <Navbar />
      <Sidebar>
        <Routes>
          <Route path="/applications" element={<Applications />} />
          <Route path="/groups" element={<Groups />} />
          <Route path="/students" element={<Students />} />
          <Route path="/mentors" element={<Mentors />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/analytics" element={<Analytics />} />
        </Routes>
      </Sidebar>
    </>
  );
}

export default App;

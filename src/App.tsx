// import { useAppSelector } from './store/hook/hook';
import { Route, Routes } from 'react-router-dom';
import TrelloContainer from './ui/components/Trello-Container/Trello-container';
import './App.css';
import Sidebar from './ui/components/Sidebar/Sidebar';
import Applications from './ui/components/pages/Applications/Applications';
import Groups from './ui/components/pages/Groups/Groups';
import Students from './ui/components/pages/Students/Students';
import Mentors from './ui/components/pages/Mentors/Mentors';
import Archive from './ui/components/pages/Archive/Archive';
import Analytics from './ui/components/pages/Analytics/Analytics';
import Navbar from './ui/components/Navbar/Navbar';

function App(): JSX.Element {
  // const columns = useAppSelector((trello) => trello.trello?.columns);
  return (
    <div className="w-[98vw]">
      <Navbar />
      <Sidebar>
        <Routes>
          <Route path="/" element={<TrelloContainer />} />
          <Route path="/applications" element={<Applications />} />
          <Route path="/groups" element={<Groups />} />
          <Route path="/students" element={<Students />} />
          <Route path="/mentors" element={<Mentors />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/analytics" element={<Analytics />} />
        </Routes>
      </Sidebar>
    </div>
  );
}

export default App;

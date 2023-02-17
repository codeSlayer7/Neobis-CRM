// import { useAppSelector } from './store/hook/hook';

import Navbar from './ui/components/Navbar/Navbar';
import TrelloContainer from './ui/components/Trello-Container/Trello-container';

function App(): JSX.Element {
  // const columns = useAppSelector((trello) => trello.trello?.columns);
  return (
    <>
      <Navbar />
      <TrelloContainer />
    </>
  );
}

export default App;

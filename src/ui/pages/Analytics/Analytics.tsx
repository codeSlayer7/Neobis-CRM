import Calendar from '../../components/Schedule/calendar';

import HistoryTable from '../../pages/HistoryOperation/history/HistoryTable';
import Schedule from '../../components/Schedule/schedule';
import HistoryTitle from '../../pages/HistoryOperation/history/history-title';

function Analytics() {
  return (
    <div className="mx-auto mt-10 ml-16 w-[100%] ">
      <HistoryTitle />
      <HistoryTable />
      <Calendar />
      <div className="mt-10 h-[600px] w-[90%]">
        <Schedule />
      </div>
    </div>
  );
}
export default Analytics;

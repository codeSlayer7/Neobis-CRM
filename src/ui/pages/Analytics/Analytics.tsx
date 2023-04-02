import Calendar from '../../components/Schedule/calendar';

import HistoryTable from '../../pages/HistoryOperation/history/HistoryTable';
import Schedule from '../../components/Schedule/schedule';
import HistoryTitle from '../../pages/HistoryOperation/history/history-title';

function Analytics() {
  return (
    <div className="mt-10 ml-16 w-[100%] mx-auto ">
      <HistoryTitle />
      <HistoryTable />
      <Calendar />
      <div className="w-[90%] h-[600px] mt-10">
        <Schedule />
      </div>
    </div>
  );
}
export default Analytics;

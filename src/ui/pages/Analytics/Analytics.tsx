import Calendar from '../../components/Schedule/calendar';
import BasicTable from '../HistoryOperation/history/HistoryTable';
import Schedule from '../../components/Schedule/schedule';
import HistoryTitle from '../HistoryOperation/history/history-title';
import HistoryModal from '../HistoryOperation/history/history-modal';
import HistoryTable from '../HistoryOperation/history/HistoryTable';

function Analytics() {
  return (
    <div className="mx-auto mt-10 ml-16 w-[100%] ">
      <HistoryTitle />
      <BasicTable />
      <Calendar />
      <div className="mt-10 h-[600px] w-[90%]">
        <Schedule />
      </div>
    </div>
  );
}
export default Analytics;

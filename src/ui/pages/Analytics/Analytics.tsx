import Calendar from '../../components/Schedule/calendar';
import BasicTable from '../../components/Schedule/history/history-second';
import HistoryTable from '../../components/Schedule/history-table';
import Schedule from '../../components/Schedule/schedule';
import HistoryTitle from '../../components/Schedule/history/history-title';

function Analytics() {
  return (
    <div className="mt-10 ml-16 w-[100%] mx-auto ">
      <HistoryTitle />
      <BasicTable />
      <Calendar />
    </div>
  );
}
export default Analytics;

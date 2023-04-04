import BarChart from './Chart/BarChart';
import ColumnChart from './Chart/ColumnChart';
import DonutChart from './Chart/DonutChart';

export default function Analytics() {
  return (
    <div className="flex flex-col pl-[40px] pt-[63px] ">
      <DonutChart />
      <div>
        <ColumnChart />
      </div>
      <div>
        <BarChart />
      </div>
    </div>
  );
}

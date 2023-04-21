import BarChart from './Chart/Gender';
import ColumnChart from './Chart/ColumnChart';
import DonutChart from './Chart/DonutChart';
import ReasonsForLosingClient from './Chart/ReasonsForLosingClient';

export default function Analytics() {
  return (
    <div className="flex flex-col pl-[40px] pt-[63px]">
      <DonutChart />
      <div>
        <ColumnChart />
      </div>
      <div>
        <BarChart />
      </div>
      <div>
        <ReasonsForLosingClient/>
        </div>
    </div>
  );
}

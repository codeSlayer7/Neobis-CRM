import BarChart from './Chart/Gender';
import ColumnChart from './Chart/ColumnChart';
import DonutChart from './Chart/DonutChart';
import ReasonsForLosingClient from './Chart/ReasonsForLosingClient';

export default function Analytics() {
  return (
    <div className="flex flex-col my-20 pl-[40px] ">
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

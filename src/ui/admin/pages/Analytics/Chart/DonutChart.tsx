import { Grid } from '@mui/material';
import Chart from 'react-apexcharts';

interface Props {}

const DonutChart: React.FC<Props> = () => {
  const options: ApexCharts.ApexOptions = {
    colors: ['#023E8A', '#4A3AFF', '#962DFF', '#0077B6', '#FF8126', '#C70077'],
    series: [44, 55, 41, 17, 15, 20, 22, 50],
    labels: [
      'JavaScript',
      'Python',
      'Java',
      'Android',
      'iOS',
      'UX/UI Design',
      'Project Manager',
      'Flutter',
    ],
    legend: {
      // show: false
      fontSize: '20px',
      offsetX: 50,
    },
    chart: {
      offsetX: 0,
      offsetY: -50,
    },
    dataLabels: {
      enabled: true,
    },
  };

  const series = [44, 55, 41, 17, 15, 20, 22, 50];
  return (
    <div className="mb-[102px] w-[1290px] rounded-[20px] border-2 bg-white">
      <div className="flex flex-col pl-[39px] pt-[10px]">
        <span className="text-[#9291A5] ">Статистика</span>
        <div className="pb-[32px] text-[20px] font-semibold">
          Часто записываемые курсы
        </div>
      </div>
      <div className="-[1px solid #E5E5EF] border" />
      <div className="flex">
        <div className="mt-[-40px] w-[80%]">
          <Grid
            xs={12}
            style={{ height: `${window.innerHeight}`, marginTop: '100px' }}
          >
            <Grid xs={12} item>
              <Grid xs={2} item />
              <Grid xs={8} item>
               
                  <Chart
                    options={options}
                    series={series}
                    type="donut"
                    height={400}
                  />
                
              </Grid>
            </Grid>
            <Grid xs={2} item />
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default DonutChart;

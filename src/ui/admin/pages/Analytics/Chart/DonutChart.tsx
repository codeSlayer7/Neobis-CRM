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
      offsetX:  200,
    },
    chart: {
      offsetX: -320,
      offsetY: -50
    },
    dataLabels: {
      enabled: true,
    },
  };

  const series = [44, 55, 41, 17, 15, 20, 22, 50];
  return (
    <div className="w-[1290px] bg-white rounded-[20px] mb-[102px]">
      <div className="flex flex-col pl-[39px] pt-[10px]">
        <span className="text-[#9291A5] ">Статистика</span>
        <div className="text-[20px] font-semibold pb-[32px]">
          Часто записываемые курсы
        </div>
      </div>
      <div className="border -[1px solid #E5E5EF]"></div>
      <div className='flex'>
      <div className="w-[100%] mt-[-40px]">
        <Grid
          xs={12}
          style={{ height: `${window.innerHeight}`, marginTop: '100px' }}
        >
          <Grid xs={12} item>
            <Grid xs={2} item></Grid>
            <Grid xs={8} item>
              <Chart
                options={options}
                series={series}
                type="donut"
                height={400}
              />
            </Grid>
          </Grid>
          <Grid xs={2} item></Grid>
        </Grid>
      </div>
      {/* <div className='flex justify-between'>
        <div>
          <div>JavaScript</div>
          <div>Python</div>
          <div>Java</div>
          <div>Android</div>
        </div>
        <div>
          <div>iOS</div>
          <div>UX/UI Design</div>
          <div>Project Manager</div>
          <div>Flutter</div>
        </div>
      </div> */}
      </div>
    </div>
  );
};

export default DonutChart;

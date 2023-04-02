import { Grid } from '@mui/material';
import Chart from 'react-apexcharts';

interface Props {}


const DonutChart: React.FC<Props> = () => {
  const options: ApexCharts.ApexOptions = {
    colors: ['#023E8A', '#4A3AFF', '#962DFF', '#0077B6', '#FF8126', '#C70077'],
    series: [44, 55, 41, 17, 15, 20, 22, 50],
    labels:  [ 'Java Script',
    'Python',
    'Java',
    'Android',
    'iOS',
    'UX/UI Design',
    'Project Manager',
    'Flutter'],
    legend: {
      fontSize: '20px',
      // width: 500,
      // height: 100,
    },
    dataLabels: {
      enabled: true,
    },
  };

  const series = [44, 55, 41, 17, 15, 20, 22, 50];
  return (
    <div className="w-[800px]">
      <Grid
        xs={12}
        style={{ height: `${window.innerHeight}`, marginTop: '150px' }}
      >
        <Grid xs={12} item>
          <Grid xs={2} item></Grid>
          <Grid xs={8} item>
            <Chart
              options={options}
              series={series}
              type="donut"
              // width="100%"
              // height={500}
            />
          </Grid>
        </Grid>
        <Grid xs={2} item></Grid>
      </Grid>
    </div>
  );
};

export default DonutChart;

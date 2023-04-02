import ReactApexChart from 'react-apexcharts';
import ApexCharts from 'react-apexcharts';

interface DataItem {
  name: string;
  data: number[];
  color: string;
}

const data: DataItem[] = [
  {
    name: 'Male',
    data: [20, 25, 30, 35, 40],
    color: '#4A3AFF',
  },
  {
    name: 'Female',
    data: [18, 23, 28, 33, 38],
    color: '#C893FD',
  },
];

export default function BarChart() {
  const options: ApexCharts.ApexOptions = {
    chart: {
      type: 'bar',
      height: 350,
      stacked: true,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: '50%',
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ['18-24', '25-34', '35-44', '45-54', '55-64'],
    },
    tooltip: {
      y: {
        formatter: function (val: number) {
          return val + ' %';
        },
      },
    },
  };

  return (
    <>
      <ReactApexChart options={options} series={data} type="bar" height={350} />
    </>
  );
}

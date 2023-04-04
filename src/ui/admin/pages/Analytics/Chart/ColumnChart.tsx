import ReactApexChart from 'react-apexcharts';

interface ChartOptions {
  series: {
    name: string;
    data: number[];
    color: string;
  }[];
  chart: {
    type: 'bar';
    height: number;
  };
  plotOptions: {
    bar: {
      horizontal: boolean;
      columnWidth: string;
      endingShape: 'rounded';
    };
  };
  dataLabels: {
    enabled: boolean;
  };
  stroke: {
    show: boolean;
    width: number;
    colors: string[];
  };
  xaxis: {
    categories: string[];
  };
  fill: {
    opacity: number;
  };
  tooltip: {
    y: {
      formatter: (val: number) => string;
    };
  };
}

export default function ColumnChart() {
  const chartData: ChartOptions = {
    series: [
      {
        name: 'Ждет звонка',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
        color: '#962DFF',
      },
      {
        name: 'Звонок совершен',
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
        color: '#4A3AFF',
      },
      {
        name: 'Записан на проб.урок',
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
        color: '#E0C6FD',
      },
      {
        name: 'Посетил проб.урок',
        data: [20, 44, 32, 76, 85, 98, 2, 3, 19],
        color: '#93AAFD',
      },
    ],
    chart: {
      type: 'bar',
      height: 650,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '75%',
        endingShape: 'rounded',
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: (val) => {
          return  val + '%';
        },
      },
    },
  };

  return (
    <>
      <ReactApexChart
        options={chartData}
        series={chartData.series}
        type="bar"
        height={chartData.chart.height}
      />
    </>
  );
}

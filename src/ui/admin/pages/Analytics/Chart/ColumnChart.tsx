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
    <div className="w-[1290px] bg-white rounded-[20px] mb-[102px]">
            <div className="flex flex-col pl-[39px] pt-[10px]">
        <span className="text-[#9291A5] ">Статистика</span>
        <div className="text-[20px] font-semibold pb-[32px]">
        Категория Заявок
        </div>
      </div>
      <div className="border -[1px solid #E5E5EF]"></div>
      <ReactApexChart
        options={chartData}
        series={chartData.series}
        type="bar"
        height={chartData.chart.height}
      />
    </div>
  );
}

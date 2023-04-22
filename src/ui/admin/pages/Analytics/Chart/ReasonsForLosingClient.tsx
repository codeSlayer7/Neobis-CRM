import ReactApexChart from 'react-apexcharts';

function ReasonsForLosingClient() {
  const options: ApexCharts.ApexOptions = {
    series: [{ data: [400, 430, 448, 470, 540] }],
    chart: {
      type: 'bar',
      height: 250,
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: true,
        colors: {
          ranges: [
            {
              from: 0,
              to: 1000,
              color: '#A78BFA', // Устанавливаем фиолетовый цвет для баров
            },
          ],
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: [
        'не получается совмещать с работой',
        'финансовые трудности',
        'не успеваю по учебе',
        'непосещающие',
        'другое',
      ],
    },
    yaxis: {
      labels: {
        show: true, // Показываем лейблы
        rotate: -45, // Максимальная высота лейблов
        style: {
          fontSize: '12px', // Размер шрифта лейблов
          fontWeight: 'bold', // Жирность шрифта лейблов
          colors: '#000000', // Цвет шрифта лейблов
        },
        offsetY: 0, // Смещение лейблов по оси Y
      },
    },
  };

  return (
    <div className="rounded-3xl border-2 bg-white p-4 text-gray-900">
      <div className="flex flex-col pl-[39px] pt-[10px]">
        <span className="text-[#9291A5] ">Статистика</span>
        <div className="mb-[20px] text-[20px] font-semibold">
          Причины потери клиента
        </div>
      </div>
      <div className="-[1px solid #E5E5EF] border" />
      <div className="ml-[-55px]">
        <ReactApexChart
          options={options}
          series={options.series}
          type="bar"
          width={1320}
          height={280}
        />
      </div>
    </div>
  );
}

export default ReasonsForLosingClient;

import Calendar from './calendar';

const schedule = [
  'Время',
  'Пн',
  'Вт',
  'Ср',
  'Чт',
  'Пт',
  'Сб',
  'Вс',
  '09:30 - 12:00',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '09:30 - 12:00',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '09:30 - 12:00',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '09:30 - 12:00',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
];
function Schedule() {
  return (
    <div className="grid h-[60%] w-[90%] grid-cols-8 bg-white ">
      {schedule.map((el, idx) => (
        <div
          className=" [&:nth-child(-n+8)]:bg-neobis-bg-green flex items-center justify-center border-[1px] border-[#D4D4D4] text-xl hover:bg-[#D4D4D4] [&:nth-child(-n+8)]:text-2xl [&:nth-child(-n+8)]:text-white "
          // eslint-disable-next-line react/no-array-index-key
          key={idx}
        >
          {el}
        </div>
      ))}
    </div>
  );
}

export default Schedule;

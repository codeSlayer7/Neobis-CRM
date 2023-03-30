import {
  add,
  eachDayOfInterval,
  endOfMonth,
  getDay,
  format,
  parse,
  parseISO,
  startOfToday,
} from 'date-fns';
import { ru } from 'date-fns/locale';
import setDefaultOptions from 'date-fns/setDefaultOptions';
import { useState } from 'react';
import DropDown from '../../DropDown';

function HistoryTitle() {
  const today = startOfToday();
  const [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'));
  const firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date());
  setDefaultOptions({ locale: ru });
  const result = format(today, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx");
  console.log(result);

  return (
    <div className="flex justify-between mb-10">
      <div>
        <h3 className="font-bold text-3xl">История операций</h3>
        <span className="block mt-5 font-semibold text-xl">
          {' '}
          Сегодня - {format(parseISO(result), ' EEEE d MMMM yyyy')} г.
        </span>
      </div>

      <div className="mt-2">
        <DropDown
          label={<div className="text-[16px] ">Оплата</div>}
          onOptionClick={(option) => console.log(option)}
          options={['Тип операций', '50%', '75%', '100%']}
        />
      </div>
    </div>
  );
}

export default HistoryTitle;

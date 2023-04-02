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
import DropDown from '../../../components/DropDown';
import HistoryTable from './HistoryTable';

function HistoryTitle() {
  const today = startOfToday();
  setDefaultOptions({ locale: ru });
  const result = format(today, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx");

  return (
    <div className="mb-10 flex flex-col justify-between">
      <div>
        <h3 className="text-3xl font-bold">История операций</h3>
        <span className="mt-5 block text-xl font-semibold">
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
      <HistoryTable />
    </div>
  );
}

export default HistoryTitle;

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
    <div className=" h-full flex flex-col justify-between bg-[#F4F7FD]">
      <div>
        <h3 className="text-3xl mx-20 mt-5 font-bold text-[#4588C6]">История операций</h3>
        <span className="mx-20 my-5 block text-xl font-semibold">
          {' '}
          Сегодня - {format(parseISO(result), ' EEEE d MMMM yyyy')} г.
        </span>
      </div>

      <div className="mt-2">
        {/* <DropDown
          label={<div className="text-[16px] ">Оплата</div>}
          onOptionClick={(option) => console.log(option)}
          options={['Тип операций', '50%', '75%', '100%']}
        /> */}
      </div>
      <HistoryTable />
    </div>
  );
}

export default HistoryTitle;

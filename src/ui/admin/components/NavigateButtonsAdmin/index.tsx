import { useState } from 'react';
import Search from '../../../components/Search';

interface Props {
  setButtonType: (v: number) => void;
  buttonType: number;
}

const buttons = [
  {
    label: 'Группa',
    value: 0,
  },
  {
    label: 'Преподаватели',
    value: 1,
  },
  {
    label: 'Студенты',
    value: 2,
  },
  {
    label: 'Пользователи',
    value: 3,
  },
  {
    label: 'Черный список',
    value: 4,
  },
];

export default function NavigateButtonsAdmin({ buttonType, setButtonType }: Props) {
  return (
    <div className="bg-[#6AAAEB] p-[16px] rounded-[16px] flex">
      {buttons.map((btn) => {
        return (
          <button
            onClick={() => setButtonType(btn.value)}
            className={
              buttonType === btn.value
                ? 'border-[1px solid #E2E2E2] mr-[60px] rounded-[8px] bg-[#2C599D] px-[15px] py-[8px] text-white'
                : 'border-[1px solid #E2E2E2] mr-[60px] rounded-[8px] bg-[#FFFFFF] px-[15px] py-[8px]'
            }
          >
            {btn.label}
          </button> 
        );
      })}
      <Search />
    </div>
  );
}

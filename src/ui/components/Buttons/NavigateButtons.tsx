import { useState } from 'react';
import Search from '../Search';

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

export default function NavigateButtons({ buttonType, setButtonType }: Props) {
  return (
    <div className="flex rounded-[16px] bg-[#E2EBFF] pl-[31px] pt-[20px] pb-[19px] pr-[29px]">
      {buttons.map((btn) => {
        return (
          <button
            onClick={() => setButtonType(btn.value)}
            className={
              buttonType === btn.value
                ? 'border-[1px solid #E2E2E2] mr-[60px] rounded-[8px] bg-[#70BF44] px-[15px] py-[8px] text-white'
                : 'border-[1px solid #E2E2E2] mr-[60px] rounded-[8px] bg-[#FFFFFF] px-[15px] py-[8px]'
            }
          >
            {btn.label}
          </button>
        );
      })}
      <div>
        <Search />
      </div>
    </div>
  );
}

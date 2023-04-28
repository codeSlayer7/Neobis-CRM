import cx from 'classnames';
import { useState } from 'react';
import Search from '../Search';

interface Props {
  setButtonType: (v: number) => void;
  buttonType: number;
  buttonProp: any;
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

export default function NavigateButtons({
  buttonType,
  setButtonType,
  buttonProp,
}: Props) {
  console.log(buttonProp, 'props button');

  return (
    <div className="flex rounded-[16px] bg-[#E2EBFF] p-[16px]">
      {...(buttonProp ? buttonProp : buttons)?.map((btn, index) => {
        return (
          <button
            key={index}
            onClick={() => setButtonType(btn.value)}
            className={cx(
              buttonType === btn.value
                ? `bg-[#70BF44]  border-[1px solid #E2E2E2] mr-[60px] rounded-[8px]   px-[15px] py-[8px] text-white ${
                    buttonProp && 'bg-[#182936]'
                  }`
                : `border-[1px solid #E2E2E2] mr-[60px] rounded-[8px] bg-[#FFFFFF] px-[15px] py-[8px]`
            )}
          >
            {btn.label}
          </button>
        );
      })}
      <Search />
    </div>
  );
}

import React from 'react';

interface Props {
  columnTitle: string;
  children: React.ReactNode;
  count: number;
}

function TrelloColumn({ columnTitle, children, count }: Props) {
  return (
    <div className="bg-neobis-bg-column-color mx-4 mt-4 inline-block h-[100%]  rounded-3xl px-1.5 py-4 ">
      <div className="flex w-[100%] justify-between rounded-md bg-[#2E353A] p-2   text-white ">
        <p className="text-base font-semibold xl:text-lg  2xl:text-xl ">
          {' '}
          {columnTitle}{' '}
        </p>
        <div className="h-8 w-8 rounded-full bg-white  ">
          <p className=" mt-1 text-center text-base text-slate-900 ">{count}</p>
        </div>
      </div>
      <div className="w-[100%]">{children}</div>
    </div>
  );
}

export default TrelloColumn;

interface Props {
  columnTitle: string;
  children: React.ReactNode;
}

function TrelloColumn({ columnTitle, children }: Props) {
  return (
    <div className="h-[100%] w-[310px] px-2 py-4 bg-neobis-bg-column-color rounded-3xl mt-4">
      <div className="w-[100%] px-2 bg-[#2E353A] text-white font-semibold text-xl rounded-md py-2 flex justify-between">
        <p className="p"> {columnTitle} </p>
        <div className="rounded-full bg-white w-8 h-8  ">
          <p className=" text-slate-900 text-base text-center mt-1 ">3</p>
        </div>
      </div>
      {children}
    </div>
  );
}

export default TrelloColumn;

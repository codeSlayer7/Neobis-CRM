import historyBg from '../../icons/historySvg.svg';

function HistoryHeader() {
  return (
    <>
      <div className="w-[100%]">
        <img src={historyBg} className='object-cover w-full h-full'/>
      </div>
    </>
  );
}

export default HistoryHeader;

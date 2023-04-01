import historyBg from '../../icons/historySvg.svg';

function HistoryHeader() {
  return (
    <div className="w-[100%]">
      <img src={historyBg} className="h-full w-full object-cover" />
    </div>
  );
}

export default HistoryHeader;

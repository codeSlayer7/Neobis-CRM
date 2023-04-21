import SearchIcon from '../../icons/SearchIcon';

export default function Search(props: any) {
  return (
    <div className="flex w-[350px] items-center justify-between">
      <input
        {...props}
        className="placeholder:regular absolute block w-[350px] rounded-md border  border-slate-300 bg-white py-2 pl-9 pr-3 shadow-sm placeholder:text-slate-400 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 sm:text-sm"
        placeholder="Поиск..."
        type="text"
        name="search"
      />
      <span className="relative left-[290px]">
        <SearchIcon />
      </span>
    </div>
  );
}
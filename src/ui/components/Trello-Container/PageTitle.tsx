function PageTitle() {
  return (
    <div className="flex w-[90vw] justify-between pb-8 pl-[2%] pr-[2%] pt-12">
      <h3 className="block text-4xl font-bold text-black">Заявки</h3>
      <button
        type="button"
        className="bg-neobis-bg-green rounded-lg px-4 py-[8px] text-xl font-semibold text-white hover:opacity-90 "
      >
        Создать карточку
      </button>
    </div>
  );
}

export default PageTitle;

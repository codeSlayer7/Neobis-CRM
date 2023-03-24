function PageTitle() {
  return (
    <div className="w-[100%] pb-8 pl-[2vw] pr-[2vw] pt-12">
      <div className="flex justify-between">
        <h3 className="block text-4xl font-bold text-black">Заявки</h3>
        <button
          type="button"
          className="bg-neobis-bg-green rounded-lg px-4 py-[8px] text-xl font-semibold text-white hover:opacity-90 "
        >
          Создать карточку
        </button>
      </div>
    </div>
  );
}

export default PageTitle;

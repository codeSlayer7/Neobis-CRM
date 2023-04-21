function HistoryModal({ show, manager }: any) {
  if (!show) {
    return null;
  }
  return (
    <div className="w-[100vw] h-[100vh] z-10 absolute">
      <div className="fixed inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.07)]">
        <div className="bg-[#F5F5F5]  w-[60%] rounded-2xl py-12 pl-10 pr-16 flex ">
          <div className="w-[165px]h-[165px]">
            <img
              src={manager.img}
              alt="avatar"
              className="w-[165px] h-[165px] rounded-full "
            />
          </div>
          <div className="flex ml-14">
            <ul className="flex flex-col justify-around">
              <li className="font-bold text-2xl pb-2">
                {manager.first_name} {manager.last_name}
              </li>
              <li className="font-semibold text-xl">Должность</li>
              <li className="font-semibold text-xl">Номер телефона</li>
              <li className="font-semibold text-xl">Электронная почта</li>
            </ul>

            <ul className="flex flex-col justify-around ml-16 font-normal text-xl">
              <li className="pb-2">&nbsp;</li>
              <li>Офис менеджер</li>
              <li>+996 505 54 23 43</li>
              <li>{manager.email}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HistoryModal;

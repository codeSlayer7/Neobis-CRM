import { useAppSelector } from '../../../constants/global';

function ProfileInput() {
  const users = useAppSelector(
    (state) => {
      return state.admin.users
    }
  );

  console.log(users, `users`);
  

  return (
    <div className="mt-16 flex">
      <div>
      {/* {users &&  */}
      {/* // users.map((user: any) => ( */}
        <form >
          <label
            htmlFor="name"
            className="mb-3 block text-lg font-normal text-gray-900"
          >
            Имя
          </label>

          <input
            type="name"
            id="name"
            // value={user.firstName}
            className="mb-3 block h-[45px] w-[292px] rounded-lg border border-black bg-white p-2.5 text-sm"
            required
          />

          <label
            htmlFor="email"
            className="mb-3 block text-lg font-normal text-gray-900"
          >
            Электронная почта
          </label>

          <input
            type="email"
            id="email"
            // value={user.email}
            className="mb-3 block h-[45px] w-[292px] rounded-lg border border-black bg-white p-2.5 text-sm"
            required
          />
          <label
            htmlFor="adress"
            className="mb-3 block text-lg font-normal text-gray-900"
          >
            Адрес
          </label>

          <input
            type="adress"
            id="adress"
            className="mb-3 block h-[45px] w-[292px] rounded-lg border border-black bg-white p-2.5 text-sm"
            required
          />
        </form>
          {/* // ))} */}
      </div>
      <div className="ml-16">
        <form>
          <label
            htmlFor="secondName"
            className="mb-3 block text-lg font-normal text-gray-900"
          >
            Фамилия
          </label>

          <input
            type="secondName"
            id="secondName"
            // value={lastName}
            className="mb-3 block h-[45px] w-[292px] rounded-lg border border-black bg-white p-2.5 text-sm"
            required
          />

          <label
            htmlFor="phone"
            className="mb-3 block text-lg font-normal text-gray-900"
          >
            Номер телефона
          </label>

          <input
            type="phone"
            id="phone"
            // value={phoneNumber}
            className="mb-3 block h-[45px] w-[292px] rounded-lg border border-black bg-white p-2.5 text-sm"
            required
            />
          <label
            htmlFor="gender"
            className="mb-3 block text-lg font-normal text-gray-900"
            >
            Пол
          </label>

          <input
            type="gender"
            id="gender"
            className="mb-3 block h-[45px] w-[292px] rounded-lg border border-black bg-white p-2.5 text-sm"
            required
            />
        </form>
      </div>
    </div>
  );
}
export default ProfileInput;

import { useState } from 'react';
import {
  IApplication,
  IApplicationPost,
} from '../../../redux/service/applications/applications';
import {
  marketingOptions,
  StateStatusType,
  MarketingStrategyType,
} from '../../../interfaces/enum';
import More from '../../icons/More';
import { Select, MenuItem, styled } from '@mui/material';

const CustomSelect = styled(Select)(() => ({
  height: '40px',
  width: '100%',
  borderRadius: 'none',
  '&.MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'black',
    },
    '&:hover fieldset': {
      borderColor: 'black',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'black',
    },
  },
}));
type Entries<T> = {
  [K in keyof T]: [key: K, value: T[K]];
}[keyof T][];

function CreateCard() {
  const [postApp, setPostApp] = useState<IApplicationPost>({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    gender: '',
    hasLaptop: false,
    marketingStrategy: 'INSTAGRAM',
    applicationInitialStatusNum: 1,
    department: {
      name: '',
      status: '',
    },
    reason: '',
    education: '',
  });
  console.log(postApp);

  // const handleChange = (e: InputEvent) => {
  //   setPostApp({ ...postApp, creator: e.target.value });
  // };

  return (
    <div className="flex h-auto w-full items-center justify-center">
      <div className="my-10 h-[798px] w-[886px] rounded-lg  border bg-[#FAFAFA] ">
        <div className="mt-5 ml-[820px]">
          <More />
        </div>
        <h2 className="ml-6 mt-4 text-3xl font-bold">Создать карту</h2>
        <div className="mt-10 ml-6 mr-[56px] flex justify-between">
          <div>
            <form>
              <label className="mb-3 block text-lg font-semibold text-gray-900">
                ФИО
              </label>

              <input
                type="name"
                id="name"
                value={postApp.firstName}
                className="mb-3 block h-[40px] w-[377px] rounded-sm border border-black bg-white p-2.5 text-sm"
                onChange={(e) =>
                  setPostApp({ ...postApp, firstName: e.target.value })
                }
                required
              />
              <label className="mb-3 block text-lg font-semibold text-gray-900">
                ФИО
              </label>

              <input
                type="name"
                id="name"
                value={postApp.firstName}
                className="mb-3 block h-[40px] w-[377px] rounded-sm border border-black bg-white p-2.5 text-sm"
                onChange={(e) =>
                  setPostApp({ ...postApp, firstName: e.target.value })
                }
                required
              />
              <label
                htmlFor="department"
                className="mb-3 block text-lg font-semibold text-gray-900"
              >
                Направление
              </label>

              <input
                type="department"
                id="department"
                className="mb-3 block h-[40px] w-[377px] rounded-sm border border-black bg-white p-2.5 text-sm"
                required
                value={postApp.department.name}
                onChange={(e) =>
                  setPostApp({
                    ...postApp,
                    department: {
                      ...postApp.department,
                      name: e.target.value,
                    },
                  })
                }
              />

              <label
                htmlFor="date"
                className="mb-3 block text-lg font-semibold text-gray-900"
              >
                Дата заявки
              </label>
              <CustomSelect
                value={postApp.applicationInitialStatusNum}
                onChange={(e) =>
                  setPostApp({
                    ...postApp,
                    applicationInitialStatusNum: e.target.value as number,
                  })
                }
              >
                <MenuItem value={1}>Ждет звонка</MenuItem>
                <MenuItem value={2}>Звонок зовершен</MenuItem>
                <MenuItem value={3}>Записан на пробный урок</MenuItem>
                <MenuItem value={4}>Посетил пробный урок</MenuItem>
              </CustomSelect>

              <label
                htmlFor="status"
                className="mb-3 block text-lg font-semibold text-gray-900"
              >
                Статус
              </label>

              <input
                type="status"
                id="status"
                className="mb-3 block h-[40px] w-[377px] rounded-sm border border-black bg-white p-2.5 text-sm"
                required
              />

              <label
                htmlFor="payment"
                className="mb-3 block text-lg font-semibold text-gray-900"
              >
                Способ оплаты
              </label>

              <input
                type="payment"
                id="payment"
                className="mb-3 block h-[40px] w-[377px] rounded-sm border border-black bg-white p-2.5 text-sm"
                required
              />
            </form>
          </div>
          <div>
            <form>
              <label
                htmlFor="phone"
                className="mb-3 block text-lg font-semibold text-gray-900"
              >
                Номер телефона
              </label>

              <input
                type="phone"
                id="phone"
                className="mb-3 block h-[40px] w-[377px] rounded-sm border border-black bg-white p-2.5 text-sm"
                required
              />

              <CustomSelect
                value={postApp.marketingStrategy}
                onChange={(e) =>
                  setPostApp({
                    ...postApp,
                    marketingStrategy: e.target.value as MarketingStrategyType,
                  })
                }
              >
                {(
                  Object.entries(marketingOptions) as Entries<
                    typeof marketingOptions
                  >
                ).map(([key, option]) => (
                  <MenuItem key={option} value={key}>
                    {option}
                  </MenuItem>
                ))}
              </CustomSelect>
              <label
                htmlFor="laptop"
                className="mb-3 block text-lg font-semibold text-gray-900"
              >
                Ноутбук
              </label>

              <input
                type="laptop"
                id="laptop"
                className="mb-3 block h-[40px] w-[377px] rounded-sm border border-black bg-white p-2.5 text-sm"
                required
              />
              <label
                htmlFor="signup"
                className="mb-3 block text-lg font-semibold text-gray-900"
              >
                Откуда записался
              </label>

              <input
                type="signup"
                id="signup"
                className="mb-3 block h-[40px] w-[377px] rounded-sm border border-black bg-white p-2.5 text-sm"
                required
              />
              <label
                htmlFor="notes"
                className="mb-3 block text-lg font-semibold text-gray-900"
              >
                Заметки
              </label>

              <textarea
                // type="notes"
                id="notes"
                className="mb-3 block h-[162px] w-[377px] rounded-sm border border-black bg-white p-2.5 text-sm"
                required
              />
              <button
                type="submit"
                className="bg-neobis-bg-green h-[47px] w-[377px] rounded-lg text-lg text-white transition duration-150 hover:scale-95"
              >
                Создать карточку
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CreateCard;

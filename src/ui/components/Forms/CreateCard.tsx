import { useState } from 'react';
import {
  IApplication,
  IApplicationPost,
} from '../../../redux/service/applications/applications';
import {
  marketingOptions,
  StateStatusType,
  MarketingStrategyType,
  eductionOption,
  EducationType,
  GenderType,
  hasLaptopOption,
} from '../../../interfaces/enum';
import More from '../../icons/More';
import DropDown from '../DropDown';
import { Select, MenuItem, styled, SelectChangeEvent } from '@mui/material';
import { borderRadius } from '@mui/system';
import { applyInitialState } from '@mui/x-data-grid/hooks/features/columns/gridColumnsUtils';
import { useAppDispatch } from '../../../constants/global';
import { postAppThunk } from '../../../redux/service/applications/applicationAction';

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
  const [laptop, setLaptop] = useState(hasLaptopOption);
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
      name: 'JavaScript',
      status: 'ACTIVE',
    },
    departmentId: 100,
    reason: '',
    education: '',
  });

  const dispatch = useAppDispatch();

  const laptopHandler = (e: any) => {
    if (e.target.value === 'Нету') {
      setPostApp({
        ...postApp,
        hasLaptop: !postApp.hasLaptop,
      });
      setLaptop({ ...laptop, hasLaptopText: e.target.value });
    }
    setLaptop({ ...laptop, hasLaptopText: e.target.value });
    setPostApp({
      ...postApp,
      hasLaptop: !postApp.hasLaptop,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const splitFullName = postApp.firstName.split(' ');
    const newPostData = {
      ...postApp,
      firstName: splitFullName[1],
      lastName: splitFullName[0],
    };
    dispatch(postAppThunk(newPostData));
  };

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
              <label
                htmlFor="name"
                className="mb-3 block text-lg font-semibold text-gray-900"
              >
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
                htmlFor="name"
                className="mb-3 block text-lg font-semibold text-gray-900"
              >
                Электронная почта
              </label>

              <input
                type="email"
                id="name"
                value={postApp.email}
                className="mb-3 block h-[40px] w-[377px] rounded-sm border border-black bg-white p-2.5 text-sm"
                onChange={(e) =>
                  setPostApp({ ...postApp, email: e.target.value })
                }
                required
              />
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
                value={postApp.phoneNumber}
                onChange={(e) =>
                  setPostApp({ ...postApp, phoneNumber: e.target.value })
                }
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
                htmlFor="payment"
                className="mb-3 block text-lg font-semibold text-gray-900"
              >
                Причина
              </label>

              <input
                value={postApp.reason}
                onChange={(e) =>
                  setPostApp({ ...postApp, reason: e.target.value as string })
                }
                type="payment"
                id="payment"
                className="mb-3 block h-[40px] w-[377px] rounded-sm border border-black bg-white p-2.5 text-sm"
                required
              />
            </form>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <label
                htmlFor="date"
                className="mb-3 block text-lg font-semibold text-gray-900"
              >
                Статус заявки
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
                Пол
              </label>
              <CustomSelect
                value={postApp.gender}
                onChange={(e) =>
                  setPostApp({
                    ...postApp,
                    gender: e.target.value as GenderType,
                  })
                }
              >
                <MenuItem value="MALE">Мужчина</MenuItem>
                <MenuItem value="FEMALE">Женщина</MenuItem>
              </CustomSelect>

              <label
                htmlFor="signup"
                className="mb-3 block text-lg font-semibold text-gray-900"
              >
                Откуда записался
              </label>

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
              <CustomSelect
                value={laptop.hasLaptopText}
                onChange={(e) => laptopHandler(e)}
              >
                <MenuItem value="Нету">Нету</MenuItem>

                <MenuItem value="Eсть">Есть</MenuItem>
              </CustomSelect>
              <label
                htmlFor="signup"
                className="mb-3 block text-lg font-semibold text-gray-900"
              >
                Оброзование
              </label>

              <CustomSelect
                value={postApp.education}
                onChange={(e) =>
                  setPostApp({
                    ...postApp,
                    education: e.target.value as EducationType,
                  })
                }
              >
                {(
                  Object.entries(eductionOption) as Entries<
                    typeof eductionOption
                  >
                ).map(([key, option]) => (
                  <MenuItem key={option} value={key}>
                    {option}
                  </MenuItem>
                ))}
              </CustomSelect>

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

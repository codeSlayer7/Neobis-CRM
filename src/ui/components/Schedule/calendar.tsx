import { Menu, Transition } from '@headlessui/react';
import { DotsVerticalIcon } from '@heroicons/react/outline';
import { ChevronLeftIcon as LeftArrow, ChevronRightIcon as RightArrow } from '@heroicons/react/solid';
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  getDay,
  format,
  isEqual,
  isSameDay,
  isSameMonth,
  isToday,
  isWithinInterval,
  parse,
  parseISO,
  startOfToday,
} from 'date-fns';
import setDefaultOptions from 'date-fns/setDefaultOptions';
// import {
//   MdOutlineKeyboardArrowRight as RighArrow,
//   MdOutlineKeyboardArrowLeft as LeftArrow,
// } from 'react-icons/Md';
import { ru } from 'date-fns/locale';
import { Fragment, useState } from 'react';

const meetings = [
  {
    id: 1,
    name: 'Курс JavaScript',
    description: 'Маленькая комната Пн, Cр, Пт',
    days: ['Mon', 'Fri', 'Wed'],
    imageUrl:
      'data:image/jpeg;base64,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',
    startDatetime: '2023-03-14T13:00',
    endDatetime: '2023-08-22T14:40',
  },
  {
    id: 2,
    name: 'Michael Foster',
    description: 'Маленькая комната Пн, Cр, Пт',
    days: ['Fri', 'Sun', 'Wed', 'Tue', 'Sat'],
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    startDatetime: '2022-05-20T09:00',
    endDatetime: '2022-05-20T11:30',
  },
  {
    id: 3,
    name: 'Dries Vincent',
    description: 'Маленькая комната Пн, Cр, Пт',
    days: ['Thu', 'Mon', 'Fri', 'Sun', 'Wed', 'Tue', 'Sat'],
    imageUrl:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    startDatetime: '2022-05-20T17:00',
    endDatetime: '2022-05-20T18:30',
  },
  {
    id: 4,
    name: 'Leslie Alexander',
    description: 'Маленькая комната Пн, Cр, Пт',
    days: ['Thu', 'Mon', 'Fri', 'Sun', 'Wed', 'Tue', 'Sat'],
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    startDatetime: '2022-06-09T13:00',
    endDatetime: '2022-06-09T14:30',
  },
  {
    id: 5,
    name: 'Michael Foster',
    description: 'Маленькая комната Пн, Cр, Пт',
    days: ['Thu', 'Mon', 'Fri', 'Sun', 'Wed', 'Tue', 'Sat'],
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    startDatetime: '2022-05-12T14:00',
    endDatetime: '2022-05-13T14:30',
  },
];
const colStartClasses = [
  '',
  'col-start-2',
  'col-start-3',
  'col-start-3',
  'col-start-5',
  'col-start-6',
  'col-start-7',
];
function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Calendar() {
  const today = startOfToday();
  const [selectedDay, setSelectedDay] = useState(today);
  console.log(ru);
  setDefaultOptions({ locale: ru });

  const [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'));
  const firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date());
  //   console.log(new Date(meetings[0].endDatetime));

  function getDatesInRange(startDate, endDate) {
    return eachDayOfInterval({
      start: new Date(startDate),
      end: new Date(endDate),
    });
  }

  const days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  });

  function previousMonth() {
    const firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'));
  }

  function nextMonth() {
    const firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'));
  }

  const selectedDayMeetings = meetings.filter((meeting) => {
    const startDate = new Date(meeting.startDatetime);
    // const daysMarked = getDatesInRange(
    //   meeting.startDatetime,
    //   meeting.endDatetime
    // );
    // const daysFilterd = daysMarked.filter((e) =>
    //   meeting.days.includes(e.toString().substring(0, 3))
    // );
    // console.log(daysFilterd);
    // return daysFilterd.some((marked) =>
    //   isSameDay(marked, day)
    // );
    return isWithinInterval(selectedDay, {
      start: startDate.setDate(startDate.getDate() - 1),
      end: new Date(meeting.endDatetime),
    });
    // isSameDay(parseISO(meeting.startDatetime), selectedDay)
  });

  return (
    <div className="pt-16 ">
      <div className="mx-auto max-w-4xl px-4 sm:px-7 md:max-w-4xl md:px-6">
        <div className=" grid grid-cols-2 md:divide-gray-200  ">
          <div className="rounded-2xl  border-[1px] border-[#D4D4D4] md:pr-14">
            <div className="bg-neobis-bg-green rounded-t-2xl pt-5 ">
              <div className="flex justify-around    ">
                <button
                  type="button"
                  onClick={previousMonth}
                  className=" flex h-8 w-8 flex-none items-center justify-center rounded-[50%] bg-white text-gray-400 hover:bg-slate-300"
                >
                  <span className="sr-only">Previous month</span>
                  <LeftArrow className="text-2xl text-[#80C700]" />
                </button>
                <h2 className=" text-2xl font-semibold text-white">
                  {format(firstDayCurrentMonth, 'LLLL yyyy')
                    .toLowerCase()
                    .split(' ')
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(' ')}
                </h2>

                <button
                  onClick={nextMonth}
                  type="button"
                  className=" flex h-8 w-8  flex-none items-center justify-center rounded-[50%] bg-white p-1.5 text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">Next month</span>
                  <RightArrow
                    className="text-2xl text-[#80C700]"
                    aria-hidden="true"
                  />
                </button>
              </div>

              <div className="mt-5 grid grid-cols-7 text-center text-xs text-xl font-semibold leading-6 text-white ">
                <div>Пн</div>
                <div>Вт</div>
                <div>Ср</div>
                <div>Чт</div>
                <div>Пт</div>
                <div>Сб</div>
                <div>Вс</div>
              </div>
            </div>

            <div className="mt-2 grid grid-cols-7 text-sm">
              {days.map((day, dayIdx) => (
                <div
                  key={day.toString()}
                  className={classNames(
                    dayIdx === 0 && colStartClasses[getDay(day)],
                    'py-1.5'
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setSelectedDay(day)}
                    className={classNames(
                      isEqual(day, selectedDay) && 'text-white',
                      !isEqual(day, selectedDay) &&
                        isToday(day) &&
                        'text-red-500',
                      meetings.some((meeting) => {
                        const daysMarked = getDatesInRange(
                          meeting.startDatetime,
                          meeting.endDatetime
                        );
                        const daysFilterd = daysMarked.filter((e) =>
                          meeting.days.includes(e.toString().substring(0, 3))
                        );
                        console.log(daysFilterd);
                        return daysFilterd.some((marked) =>
                          isSameDay(marked, day)
                        );
                      }) &&
                        'border-[1px] border-slate-400 text-black hover:bg-[#70BF44]',
                      !isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        isSameMonth(day, firstDayCurrentMonth) &&
                        'text-gray-900',
                      !isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        !isSameMonth(day, firstDayCurrentMonth) &&
                        'text-gray-400',
                      isEqual(day, selectedDay) && isToday(day) && 'bg-red-500',
                      meetings.some((meeting) =>
                        isSameDay(parseISO(meeting.startDatetime), day)
                      ) && 'bg-[#70BF44] text-slate-50 hover:bg-[#70BF44]',
                      meetings.some((meeting) =>
                        isSameDay(parseISO(meeting.endDatetime), day)
                      ) && 'bg-[#8F7DC7] text-slate-50 hover:bg-[#70BF44]',
                      isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        'bg-slate-500',
                      !isEqual(day, selectedDay) && 'hover:bg-gray-200',

                      (isEqual(day, selectedDay) || isToday(day)) &&
                        'font-semibold',
                      'mx-auto flex h-8 w-8 items-center justify-center rounded-full'
                    )}
                  >
                    <time dateTime={format(day, 'yyyy-MM-dd')}>
                      {format(day, 'd')}
                    </time>
                  </button>
                  {/* 
                  <div className="mx-auto mt-1 h-1 w-1">
                    {meetings.some((meeting) =>
                      isSameDay(parseISO(meeting.startDatetime), day)
                    ) && <div className="h-1 w-1 rounded-full bg-[#70BF44]" />}
                  </div> */}
                </div>
              ))}
            </div>
          </div>
          <section className="mt-12 md:mt-0 md:pl-14">
            <h2 className="font-semibold text-gray-900 ml-14">
              Расписание на {' '}
              <time dateTime={format(selectedDay, 'yyyy-MM-dd')}>
                {format(selectedDay, 'dd MMMM yyy')}
              </time>
            </h2>
            <ol className="mt-4 space-y-1 text-sm leading-6 text-gray-500">
              {selectedDayMeetings.length > 0 ? (
                selectedDayMeetings.map((meeting) => (
                  <Meeting meeting={meeting} key={meeting.id} />
                ))
              ) : (
                <p className='ml-14 font-bold space-y-1 text-sm leading-6 text-gray-500'> Нет событий</p>
              )}
            </ol>
          </section>
        </div>
      </div>
    </div>
  );
}

function Meeting({ meeting }) {
  const startDateTime = parseISO(meeting.startDatetime);
  const endDateTime = parseISO(meeting.endDatetime);

  return (
    <li className="group ml-14 flex items-center space-x-4 rounded-xl px-4 py-2 focus-within:bg-gray-100 hover:bg-gray-100">
      <img
        src={meeting.imageUrl}
        alt=""
        className="h-10 w-10 flex-none rounded-full"
      />
      <div className="flex-auto">
        <p className="text-gray-900">{meeting.name}</p>
        <p className="mt-0.5">
          <time dateTime={meeting.startDatetime}>
            {format(startDateTime, 'M LLLL yyyy')}
          </time>{' '}
          -{' '}
          <time dateTime={meeting.endDatetime}>
            {format(endDateTime, 'M LLLL yyyy')}
          </time>
        </p>
      </div>
      <Menu
        as="div"
        className="relative opacity-0 focus-within:opacity-100 group-hover:opacity-100"
      >
        <div>
          <Menu.Button className="-m-2 flex items-center rounded-full p-1.5 text-gray-500 hover:text-gray-600">
            <span className="sr-only">Open options</span>
            <DotsVerticalIcon className="h-6 w-6" aria-hidden="true" />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    Edit
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    Cancel
                  </a>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </li>
  );
}

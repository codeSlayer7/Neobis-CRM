import { IoChevronDown } from 'react-icons/io5';
import MentorsCard from './MentorsCard';
import MentorsData from './MentorsData';

function Mentors() {
  return (
    <div className="mx-[120px] h-auto w-[100%] px-[2vw] pt-12 ">
      <div className="ml-[800px] flex h-[43px] w-[199px] items-center justify-around rounded-lg border border-[#E2E2E2]">
        <h3 className="text-lg font-normal ">Направление</h3>
        <IoChevronDown />
      </div>
      <div className="mt-14 flex flex-wrap">
        <MentorsCard details={MentorsData} />
      </div>
    </div>
  );
}
export default Mentors;

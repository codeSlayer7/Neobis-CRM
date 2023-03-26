import DropDown from '../../components/DropDown';
import MentorsCard from './MentorsCard';
import MentorsData from './MentorsData';

function Mentors() {
  return (
    <div className="mx-[120px] h-auto w-[100%] px-[2vw] pt-12 ">
      <div className="ml-[800px] flex h-[43px] w-[199px] items-center justify-around ">
        <DropDown
          label={<div className="font-sans text-base">Направление</div>}
          onOptionClick={(option) => `(option)`}
          options={['Phyton', 'Java', 'JavaScript', 'Product Manager', 'UI8']}
        />
      </div>
      <div className="mt-14 flex flex-wrap">
        <MentorsCard details={MentorsData} />
      </div>
    </div>
  );
}
export default Mentors;

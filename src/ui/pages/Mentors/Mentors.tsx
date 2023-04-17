import DropDown from '../../components/DropDown';
import MentorsCard from './MentorsCard';

function Mentors() {
  return (
    <div className="ml-[110px]  w-[100%] pt-12 ">
      <div className="ml-[800px] flex h-[43px] w-[199px] items-center justify-around ">
        <DropDown
          label={<div className="font-sans text-base">Направление</div>}
          onOptionClick={(option) => console.log(option)}
          options={['Python', 'Java', 'JavaScript', 'Product Manager', 'UI8']}
        />
      </div>
      <div className="mt-14 flex flex-wrap">
        <MentorsCard />
      </div>
    </div>
  );
}
export default Mentors;

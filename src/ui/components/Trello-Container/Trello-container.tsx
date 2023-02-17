import TrelloColumn from './Trello-card/TrelloCard';
import TrelloCard from './Trello-card/TrelloCard/TrelloCard';

const arr = [
  {
    name: 'bakyt abykanov',
    time: '24 hours ago',
    specific: 'Frontend React',
    phoneNumber: '+996 550 51 80 40',
    status: true,
  },
  {
    name: 'bakyt abykanov',
    time: '24 hours ago',
    specific: 'Frontend React',
    phoneNumber: '+996 550 51 80 40',
    status: false,
  },
  {
    name: 'bakyt abykanov',
    time: '24 hours ago',
    specific: 'Frontend React',
    phoneNumber: '+996 550 51 80 40',
    status: false,
  },
  {
    name: 'bakyt abykanov',
    time: '24 hours ago',
    specific: 'Frontend React',
    phoneNumber: '+996 550 51 80 40',
    status: false,
  },
  {
    name: 'bakyt abykanov',
    time: '24 hours ago',
    specific: 'Frontend React',
    phoneNumber: '+996 550 51 80 40',
    status: false,
  },
];

function TrelloContainer() {
  return (
    <div className="w-[90vw]  flex justify-around">
      <TrelloColumn columnTitle="Ждет звонка">
        <TrelloCard card={arr[0]} status />
      </TrelloColumn>
      <TrelloColumn columnTitle="Звонок совершен">
        {arr.map((el) => (
          <TrelloCard key={el.name} card={el} />
        ))}
      </TrelloColumn>
      <TrelloColumn columnTitle="Записан на проб.урок">
        {arr.map((el) => (
          <TrelloCard key={el.name} card={el} />
        ))}
      </TrelloColumn>
      <TrelloColumn columnTitle="Посетил проб.урок">
        {arr.map((el) => (
          <TrelloCard key={el.name} card={el} />
        ))}
      </TrelloColumn>
    </div>
  );
}

export default TrelloContainer;

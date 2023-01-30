import Button from './component/Button';
import Container from './component/Container';
import Greet from './component/Greet';
import Heading from './component/Heading';
import Input from './component/Input';
import Oscar from './component/MiniComponent/Oscar';
import Person from './component/Person';
import PersonList from './component/PersonList';
import Status from './component/Status';

function App(): JSX.Element {
  const personName = {
    first: 'Bruce',
    last: 'Wayne',
  };

  const nameList = [
    {
      first: 'Bruce',
      last: 'Wayne',
    },
    {
      first: 'Clark',
      last: 'Kent',
    },
    {
      first: 'Princess',
      last: 'Diana',
    },
  ];

  return (
    <div className="App">
      <h2>Hi bakyt</h2>
      <Greet name="bakyt" isLoggedIn />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="error" />
      <Oscar>
        <Heading>oscar to me </Heading>
      </Oscar>
      <Button
        handleClick={(e, i) => {
          console.log(i, 'btn click', e.target);
        }}
      />
      <Input value="" handleChange={(event) => console.log(event)} />
      <Container styles={{ border: '1px solid black', padding: '1rem' }} />
    </div>
  );
}

export default App;

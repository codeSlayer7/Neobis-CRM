interface PersonListProps {
  names: {
    first: string;
    last: string;
  }[];
}

function PersonList(props: PersonListProps) {
  const { names } = props;
  return (
    <div>
      {names.map((name) => {
        return (
          <h2 key={name.first}>
            {name.first} {name.last}
          </h2>
        );
      })}
    </div>
  );
}

export default PersonList;

type PersonProps = {
  name: {
    first: string;
    last: string;
  };
};

function Person(props: PersonProps) {
  const {
    name: { first, last },
  } = props;

  return (
    <div>
      <h3>Bruce Wayne {first}</h3>
      <p>{last}</p>
    </div>
  );
}

export default Person;

type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};

function Greet(props: GreetProps) {
  const { name, isLoggedIn, messageCount } = props;

  return (
    <div>
      {isLoggedIn ? (
        <h2>
          Welcome {name} age {messageCount}
        </h2>
      ) : (
        <h2> gest</h2>
      )}
    </div>
  );
}
Greet.defaultProps = {
  messageCount: 0,
};

export default Greet;

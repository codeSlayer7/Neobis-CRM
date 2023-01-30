interface IOscar {
  children: React.ReactNode;
}

function Oscar(props: IOscar) {
  const { children } = props;
  return <div>{children}</div>;
}

export default Oscar;

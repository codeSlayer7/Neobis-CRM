interface HeadingProps {
  children: string;
}
function Heading(props: HeadingProps) {
  const { children } = props;
  return <h2>{children}</h2>;
}

export default Heading;

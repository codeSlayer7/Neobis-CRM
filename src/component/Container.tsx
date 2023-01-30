interface ContainerProps {
  styles: React.CSSProperties;
}

function Container(props: ContainerProps) {
  const { styles } = props;
  return <div style={styles}>Text lllaaal</div>;
}

export default Container;

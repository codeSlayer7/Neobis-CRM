interface InputProps {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input(props: InputProps) {
  const { value, handleChange } = props;
  return <input type="text" value={value} onChange={handleChange} />;
}

export default Input;

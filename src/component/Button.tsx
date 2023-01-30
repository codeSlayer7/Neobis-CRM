interface IButton {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
}

function Button(props: IButton) {
  const { handleClick } = props;
  return (
    <button type="submit" onClick={(e) => handleClick(e, 2)}>
      CLick
    </button>
  );
}

export default Button;

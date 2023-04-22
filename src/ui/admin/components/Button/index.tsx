interface Props {
  name: string;
}

const SendButton: React.FC<Props> = ({ name }) => {
  return (
    <button
      type="submit"
      className="mt-4 mb-8 h-[47px] w-[377px] rounded-lg border border-none bg-[#4588C6] text-lg text-white transition duration-150 hover:scale-95"
    >
      {name}
    </button>
  );
};

export default SendButton;

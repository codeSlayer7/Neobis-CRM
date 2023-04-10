interface Props {
  label: string;
}
export const Button = ({ label }: Props) => {
  return (
    <button
      type="submit"
      className="w-96 pb-5 pt-4 text-[18px] text-white bg-[#70BF44] hover:bg-[#00A64E] rounded-lg uppercase px-5 mr-2 mb-2 "
    >
      {label}
    </button>
  );
};

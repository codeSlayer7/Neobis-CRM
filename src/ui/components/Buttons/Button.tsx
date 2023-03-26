interface Props {
  label: string;
}
export const Button = ({ label }: Props) => {
  return (
    <button
      type="submit"
      className="focus:outline-none w-96  pb-5 pt-4 text-[20px] text-white bg-[#70BF44] hover:bg-[#E3E4E5]-800 focus:ring-4 focus:ring-[#E3E4E5]-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-[#E3E4E5]-600 dark:hover:bg-[#E3E4E5] dark:focus:ring-[#E3E4E5]-800"
    >
      {label}
    </button>
  );
};

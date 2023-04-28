interface Props {
  isOpen: boolean;
  text: string;
}

function HoverText({ text, isOpen }: Props) {
  return (
    <div
      className={
        isOpen
          ? ' hidden '
          : 'absolute top-[20%] left-20 z-40 m-2  hidden w-40 rounded-lg border-4 border-[#8874C8] bg-white shadow-md group-hover:block'
      }
    >
      <ul className="p-2 ">
        <li className="px-2 text-lg font-normal text-black">{text}</li>
      </ul>
    </div>
  );
}

export default HoverText;

import { GrFormClose } from "react-icons/gr";
import InputField from "../../components/Input/InputField";

interface Props {
    onClose: any;
  }


export const CreateModal: React.FC<Props> =  ({ onClose }) => {
  return (
    <div className="my-5 ml-[30%] ">
        <form className="mt-6">
          <InputField label="Имя"/>
          <InputField label="Фамилия"/>
          <InputField label="Почта"/>
          <InputField label="Номер телефона"/>
          <InputField label="Пол"/>
          <select
            id="cars"
            name="cars"
            className="mb-2 block h-[40px] w-[377px] rounded-sm border border-slate-300 bg-white p-2.5 text-sm "
          >
            <option value="js">JavaScript</option>
            <option value="python">Python</option>
            <option value="java">Java</option>
            <option value="ui8">UI8</option>
          </select>

          <button
            onClick={onClose}
            type="button"
            className="mt-4 h-[47px] w-[377px] rounded-lg border border-none bg-[#4588C6] text-lg text-white transition duration-150 hover:scale-95"
          >
            Добавить
          </button>
        </form>
      </div>
  );
}


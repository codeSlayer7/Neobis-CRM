import InputField from "../../components/Input/InputField";
import SendButton from "../../components/Button";

function AdminMentorsForm() {

      return( 
        <form className="mt-6" >
          <InputField label="Имя"/>
          <InputField label="Фамилия"/>
          <InputField label="Номер телефона"/>
          <InputField label="Почта"/>
          <InputField label="Пароль"/>
          <label className="mb-2 block text-lg font-semibold text-gray-900">
            Направление
          </label>
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
          <SendButton name="Создать"/>
        </form>
  );
}

export default AdminMentorsForm;


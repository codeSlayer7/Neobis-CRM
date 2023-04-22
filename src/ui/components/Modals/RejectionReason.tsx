import { Link } from 'react-router-dom';
import { archiveStudent } from '../../../api/studentApi';
import { useState } from 'react';

function RejectionReason({id, onSuccess}: {id: number, onSuccess: () => void}) {
  const [reason, setReason] = useState('')

const handleArchiveClick = (reason: string,id: number) => {
  archiveStudent(reason, id)
    .then(response => {
      onSuccess && onSuccess()
      console.log('Студент успешно архивирован:', response.data);
    })
    .catch(error => {
      console.error('Ошибка при архивации студента:', error);
    });
}
  return (
<>
        <p className="mt-[47px] pl-10 text-left text-xl font-semibold">
          Напишите причину
          </p>
        <div className="mt-4 ml-9 flex justify-center flex-col  ">
          <textarea
            className="h-[262px] w-[440px] rounded-lg border border-gray-800 p-2"
            placeholder="Введите текст"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
          />
          {/* <Link to="/"> */}
            <button
              type="submit"
              onClick={() => handleArchiveClick(reason, id)}
              className="hover:easy-in bg-neobis-bg-green mt-4 pt-[10px] pb-[10px] w-[440px] mb-[20px] rounded-lg border text-lg text-white transition duration-150 hover:scale-95"
            >
              Сохранить
            </button>
          {/* </Link> */}
        </div>
        </>
  );
}
export default RejectionReason;

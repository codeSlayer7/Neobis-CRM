import { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { useAppSelector } from '../../../constants/global';
import ProfileInput from '../../components/Forms/ProfileInput';
import Edit from '../../icons/Edit';
import EditWhite from '../../icons/EditWhite';

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 350,
  height: 300,
  bgcolor: 'background.paper',
  border: '2px solid gray',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
};
function Profile() {
  const [show, setShow] = useState(false);
  const [change, setChange] = useState(false);
  // const storedData = JSON.parse(localStorage.getItem('cms'));
  // const [user, setUser] = useState(storedData.user)
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleClick = () => {
    setChange(!change);
    setShow(!show);
  };

  const user = useAppSelector((state) => {
    return state.user;
  });

  return (
    <div className="mx-auto flex h-auto w-full items-center justify-center">
      <div className="my-10 mx-auto h-[798px] w-[886px]">
        <div className="flex">
          <div className="ml-7">
            <h2 className="text-3xl font-bold">
              {' '}
              {user.firstName} {user.lastName}
            </h2>
            <div className="mt-10">
              <button
                type="button"
                className={`inline-flex h-[43px] w-[212px] items-center justify-around rounded-lg border border-[#E2E2E2] text-xl font-normal ${
                  change === true
                    ? `group bg-[#70BF44] text-white transition duration-150 hover:scale-95`
                    : `bg-white`
                }`}
                onClick={handleClick}
              >
                Редактировать
                {!show && <Edit />}
                {show && <EditWhite />}
              </button>
              <button
                type="button"
                className="ml-5 h-[43px] w-[212px] rounded-lg border-2 border-[#70BF44] text-xl font-normal transition duration-150 hover:scale-95"
                onClick={handleOpen}
              >
                Изменить пароль
              </button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <h2 className='text-lg font-semibold m-3'>Изменить пароль</h2>
                  <input
                    type="text"
                    placeholder="старый пароль"
                    className="m-3 h-11 w-60 rounded-lg border border-slate-600 pl-3"
                  />
                  <input
                    type="text"
                    placeholder="новый пароль"
                    className="m-3 h-11 w-60 rounded-lg border border-slate-600 pl-3"
                  />
                  <button
                    onClick={handleClose}
                    type="button"
                    className="m-3 h-11 w-60 rounded-lg border bg-[#70BF44] text-lg text-white transition duration-150 hover:scale-95"
                  >
                    Изменить
                  </button>
                </Box>
              </Modal>
            </div>
          </div>
        </div>
        <ProfileInput />
        {show && (
          <button
            type="button"
            className="mt-10 h-[52px] w-[625px] rounded-lg border bg-[#70BF44] text-xl text-white transition duration-150 hover:scale-95"
          >
            Сохранить
          </button>
        )}
      </div>
    </div>
  );
}
export default Profile;

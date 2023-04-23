import { useState } from 'react';
import Modal from '../Modals/Modal';
import { TbArchiveOff } from 'react-icons/tb';

const ArchiveAction = (props) => {
  const [openModalUnArcive, setOpenModalUnArchive] = useState(false);

  
  const unArchive = (id) => {
    axiosInteceptor
      .put(`http://68.183.88.191:8080/api/v1/applications/unarchive?id=${id}`)
      .then((res) => console.log(res, 'success'));
    dispatch(getSortedThunk());
  };
  const handleOpenModalUnArcive = () => {
    setOpenModalUnArchive(true);
  };

  const handleCloseModalUnArcive = () => {
    setOpenModalUnArchive(false);
  };

  return (
    <div className="flex justify-around">
      <TbArchiveOff
        className="text-3xl  ml-5 mt-[4px] text-slate-400 hover:text-[#4588C6]"
        onClick={() => unArchive(props.id)}
      />
      <Modal
        title="Разархивация"
        open={openModalUnArcive}
        onClose={handleCloseModalUnArcive}
      ></Modal>
    </div>
  );
};

export default ArchiveAction;

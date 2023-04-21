import { useState } from "react";
import Modal from "../Modals/Modal";
import { TbArchiveOff } from "react-icons/tb";

const ArchiveAction = () => {
    const [openModalUnArcive, setOpenModalUnArchive] = useState(false)


    const handleOpenModalUnArcive = () => {
        setOpenModalUnArchive(true)
    }

    const handleCloseModalUnArcive = () => {
        setOpenModalUnArchive(false)
    }

    return(
        <div className="flex justify-around">
            <TbArchiveOff className="text-3xl  ml-5 mt-[4px] text-slate-400 hover:text-[#4588C6]"/>
            <Modal title="Разархивация" open={openModalUnArcive} onClose={handleCloseModalUnArcive}>
            </Modal>
        </div>
    )
}


export default ArchiveAction;
import { createPortal } from 'react-dom';
import { GrFormClose } from 'react-icons/gr';

interface ModalProps {
  title: string;
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ title, open, onClose, children }) => {
  return open ? (
    createPortal(
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-10">
        <div className="relative flex w-[598px] flex-col items-center rounded-lg border-2 bg-[#f2fbff]">
          <h3 className="mt-3 text-3xl font-bold ">{title}</h3>
          <button type="button" onClick={onClose}>
            <GrFormClose className="absolute left-[550px] top-3 text-3xl " />
          </button>
          {children}
        </div>
      </div>,
      document.body
    )
  ) : (
    <></>
    );
  }

export default Modal;

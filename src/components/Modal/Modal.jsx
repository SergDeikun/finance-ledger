import { createPortal } from 'react-dom';

import { Backdrop, ModalWindow } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ onClose, children, className }) => {
  return createPortal(
    <Backdrop>
      <ModalWindow className={className || ''}>{children}</ModalWindow>
    </Backdrop>,
    modalRoot
  );
};

export default Modal;

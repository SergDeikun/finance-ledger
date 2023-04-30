import { createPortal } from 'react-dom';

import {
  Backdrop,
  ModalWindow,
  Title,
  Text,
  BackBtn,
  IconBack,
} from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ onClose }) => {
  return createPortal(
    <Backdrop>
      <ModalWindow>
        <Title>Thank you!</Title>
        <Text>Your form submission received</Text>
        <BackBtn onClick={onClose}>
          <IconBack />
          Back to your site
        </BackBtn>
      </ModalWindow>
    </Backdrop>,
    modalRoot
  );
};

export default Modal;

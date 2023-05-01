import Modal from '../../components/Modal/Modal';

import { Title, Text, BackBtn, IconBack } from './Worning.styled';

const Worning = ({ onClose }) => {
  return (
    <Modal>
      <Title>Thank you!</Title>
      <Text>Your form submission received</Text>
      <BackBtn onClick={onClose}>
        <IconBack />
        Back to your site
      </BackBtn>
    </Modal>
  );
};

export default Worning;

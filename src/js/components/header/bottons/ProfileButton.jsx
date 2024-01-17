import styled from "styled-components";
import { useState } from "react";
import Modal from "../../modals/Modal";

const Button = styled.button`
  background-color: transparent;
  color: white;
  border: none;
  font-weight: bold;
`;

const ProfileButton = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <Button onClick={openModal}>Profile</Button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        profile Content
      </Modal>
    </>
  );
};

export default ProfileButton;

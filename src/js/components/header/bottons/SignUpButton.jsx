import styled from "styled-components";
import { useState } from "react";
import Modal from "../../modals/Modal";
import SignUpModalContent from "../../modals/signInModal/SignUpModalContent";

const Button = styled.button`
  background-color: transparent;
  color: white;
  border: none;
  font-weight: bold;
`;

const SignUpButton = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <Button onClick={openModal}>Sign Up</Button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <SignUpModalContent />
      </Modal>
    </>
  );
};

export default SignUpButton;

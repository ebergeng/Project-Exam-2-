import styled from "styled-components";
import { useState } from "react";
import Modal from "../../modals/Modal";
import LoginModalContent from "../../modals/loginModal/LoginModalContent";

const Button = styled.button`
  background-color: transparent;
  color: white;
  border: none;
  font-weight: bold;
`;

const LoginButton = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <Button onClick={openModal}>Log In</Button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <LoginModalContent />
      </Modal>
    </>
  );
};

export default LoginButton;

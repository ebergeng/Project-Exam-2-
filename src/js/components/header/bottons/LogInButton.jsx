import styled from "styled-components";
import { useState } from "react";
import Modal from "../../modals/Modal";

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
        <h1>Log In Modal</h1>
      </Modal>
    </>
  );
};

export default LoginButton;

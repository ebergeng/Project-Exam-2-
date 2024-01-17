/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styled, { keyframes } from "styled-components";
import { testModalStore } from "./modalstore/useModalStore";
import { useState, useEffect } from "react";
import BackArrowIcon from "../icons/BackArrowIcon";

// eslint-disable-next-line react/prop-types, no-unused-vars
const TestModal = ({ children }) => {
  const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: ${(props) => (props.open ? "flex" : "none")};
    justify-content: right;
    align-items: center;
    z-index: 1000;
  `;

  const slideIn = keyframes`
      from {
          transform: translateX(100%);
      }
      to {
          transform: translateX(0%);
      }
  `;

  const slideOut = keyframes`
      from {
          transform: translateX(0%);
      }
      to {
          transform: translateX(100%);
      }
  `;

  // eslint-disable-next-line no-unused-vars
  const ModalContent = styled(({ ...divProps }) => <div {...divProps} />)`
    background: var(--color-primary);
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
    width: 350px;
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    right: 0;
    top: 0;
    bottom: 0;
    min-height: 645px;
    overflow: scroll;
    animation: ${(props) => (props.open ? slideIn : slideOut)} 0.3s ease-out
      forwards;

    @media (max-width: 480px) {
      left: 0;
      width: auto;
    }
  `;

  const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    left: 10px;
    background-color: transparent;
    border: none;
  `;
  const { isOpen, closeModal, openModal } = testModalStore();
  const [modal, setModal] = useState(true);

  const close = () => {
    console.log("hey");

    if (isOpen) {
      closeModal();
    } else {
      openModal();
    }

    //console.log(isOpen)
  };

  useEffect(() => {
    console.log(isOpen);
    setModal(isOpen);
  });

  return (
    <>
      <ModalOverlay onClick={close} open={modal}>
        <ModalContent onClick={(e) => e.stopPropagation()} open={modal}>
          <CloseButton onClick={close}>
            <BackArrowIcon />
          </CloseButton>
          {children}
        </ModalContent>
      </ModalOverlay>
      <button onClick={close}>click me</button>
    </>
  );
};

export default TestModal;

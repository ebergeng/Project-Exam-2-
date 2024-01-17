import styled from "styled-components";

const Container = styled.div`
  height: 55px;
  font-size: 1.1rem;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 3px solid
    ${(props) => {
      switch (props.$state) {
        case "alert":
          return "red";
        case "danger":
          return "yellow";
        case "info":
          return "green";
        default:
          return "gray";
      }
    }};
  background-color: ${(props) => {
    switch (props.$state) {
      case "alert":
        return "#ff8989dd";
      case "danger":
        return "#fff781dd";
      case "info":
        return "#8aff92dd";
      default:
        return "gray";
    }
  }};
`;

// eslint-disable-next-line react/prop-types
const DisplayMessage = ({ children, msgType }) => {
  return <Container $state={msgType}>{children}</Container>;
};

export default DisplayMessage;

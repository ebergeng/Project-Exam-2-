import styled from "styled-components";
import useManagerStateStore from "./ManagerState";

const HeaderText = styled.h2`
  color: white;
  text-align: center;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SignUpModalHeader = () => {
  const managerState = useManagerStateStore((state) => state.managerState);

  return (
    <HeaderContainer>
      <HeaderText>
        {managerState}
        <br />
        Sign Up{" "}
      </HeaderText>
    </HeaderContainer>
  );
};

export default SignUpModalHeader;

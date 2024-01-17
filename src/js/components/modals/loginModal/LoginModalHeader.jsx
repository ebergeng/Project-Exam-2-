import styled from "styled-components";

const HeaderText = styled.h2`
  color: white;
  text-align: center;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginModalHeader = () => {
  return (
    <HeaderContainer>
      <HeaderText>
        HolyDaze <br />
        Log In
      </HeaderText>
    </HeaderContainer>
  );
};

export default LoginModalHeader;

import styled from "styled-components";
import HeaderNav from "./HeaderNav";

const HeaderContainer = styled.header`
  background-color: #003366;
  min-height: 55px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderNav />
    </HeaderContainer>
  );
};

export default Header;

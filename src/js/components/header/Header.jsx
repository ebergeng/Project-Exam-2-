import styled from "styled-components";
import HeaderNav from "./HeaderNav";

const HeaderContainer = styled.header`
  background-color: var(--color-primary);
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

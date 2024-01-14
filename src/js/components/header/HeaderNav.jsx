import { Link } from "react-router-dom";
import styled from "styled-components";
import LoginButton from "./bottons/LogInButton";
import SignUpButton from "./bottons/SignUpButton";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  height: 250px;
`;

const Ul = styled.ul`
  display: flex;
`;

const Li = styled.li`
  display: block;
`;

const HeaderNav = () => {
  return (
    <Nav>
      <Link to={"/"}>LOGO</Link>
      <Ul>
        <Li>
          <LoginButton />
        </Li>
        <Li>
          <SignUpButton />
        </Li>
      </Ul>
    </Nav>
  );
};

export default HeaderNav;

import { Link } from "react-router-dom";
import styled from "styled-components";
import LoginButton from "./bottons/LogInButton";
import SignUpButton from "./bottons/SignUpButton";
import profileStore from "../../storage/profileStore";
import ProfileButton from "./bottons/ProfileButton";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  height: 55px;
`;

const Ul = styled.ul`
  display: flex;
`;

const Li = styled.li`
  display: block;
`;

const Logo = styled.div`
  color: var(--color-accent);
  font-size: 28px;
  padding: 5px;
`;

const HeaderNav = () => {
  const { isLoggedIn } = profileStore();

  return (
    <Nav>
      <Link to={"/"}>
        <Logo>HolyDaize</Logo>
      </Link>
      <Ul>
        {isLoggedIn ? (
          <>
            <Li>
              <ProfileButton />
            </Li>
          </>
        ) : (
          <>
            <Li>
              <LoginButton />
            </Li>
            <Li>
              <SignUpButton />
            </Li>
          </>
        )}
      </Ul>
    </Nav>
  );
};

export default HeaderNav;

import styled from "styled-components";
import { ReactComponent as BackArrow } from "../../../assets/icons/arrow-right-icon.svg";

const BackArrowContainer = styled.div`
  position: relative;
  cursor: pointer;
  display: block;
  fill: #cecece;

  .icon {
    height: 35px;
    width: 35px;
    padding: 5px;
  }

  &:hover {
    fill: white;
    border: 2px solid white;
    border-radius: 5px;
  }
`;

const BackArrowIcon = () => {
  return (
    <BackArrowContainer>
      <BackArrow className="icon" />
    </BackArrowContainer>
  );
};

export default BackArrowIcon;

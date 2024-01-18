import styled from "styled-components";
import { useState, useEffect } from "react";
import useManagerStateStore from "./ManagerState";

const ToggleContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ToggleWrapper = styled.div`
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  width: 150px;

  :hover {
    cursor: pointer;
  }
`;

const ToggleLable = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 25px;
`;
const CustomerText = styled.div`
  color: ${(props) => props.color};
  font-weight: bold;
`;

const ManagerText = styled.div`
  color: ${(props) => props.color};
  font-weight: bold;
`;

const ToggleInput = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;
`;

const ToggleSlider = styled.span`
  background-color: white;
  border-radius: 34px;
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;
  margin-top: 5px;
  &::before {
    content: "";
    position: absolute;
    left: 2px;
    top: 2px;
    background-color: var(--color-secondary);
    width: 20px;
    height: 20px;
    border-radius: 50%;
    transition: 0.2s;
  }
`;

const Toggle = styled.div`
  position: relative;
  display: inline-block;
  margin: 0 10px;

  ${ToggleInput}:checked + ${ToggleSlider}::before {
    transform: translateX(26px);
  }
`;

const ToggleSwitch = () => {
  const [managerState, setManagerState] = useState(() => {
    const saved = localStorage.getItem("managerState");
    return saved === "true" ? true : false;
  });

  const newManagerState = useManagerStateStore(
    (state) => state.setManagerState,
  );

  useEffect(() => {
    localStorage.setItem("managerState", managerState);
    const root = document.documentElement;
    root.style.setProperty(
      "--color-modal",
      managerState ? "#52A49A80" : "#00336680",
    );
    root.style.setProperty(
      "--color-secondary",
      managerState ? "#003366" : "#52A49A",
    );

    const handleStorageChange = () => {
      setManagerState(localStorage.getItem("managerState") === "true");
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [managerState]);

  const toggleClick = () => {
    newManagerState();
    setManagerState(!managerState);
  };

  const colorCostumer = managerState ? "#C8C8C8" : "white";
  const colorManager = managerState ? "white" : "#C8C8C8";

  return (
    <ToggleContainer>
      <ToggleWrapper onClick={toggleClick}>
        <ToggleLable>
          <CustomerText color={colorCostumer}>Customer</CustomerText>
          <ManagerText color={colorManager}>Manager</ManagerText>
        </ToggleLable>

        <Toggle>
          <ToggleInput
            id="toggle"
            type="checkbox"
            checked={managerState}
            onChange={() => setManagerState(!managerState)}
          />
          <ToggleSlider />
        </Toggle>
      </ToggleWrapper>
    </ToggleContainer>
  );
};

export default ToggleSwitch;

import styled from "styled-components";

export const PrimaryButton = styled.button`
  width: 100%;
  background-color: var(--color-accent);
  border: none;
  height: 40px;
  font-size: 16px;
  font-weight: bolder;
  border-radius: 5px;
  box-shadow: var(--box-shadow);
  color: var(--color-background);

  &:hover {
    cursor: pointer;
    background-color: #f06a6a;
  }
`;

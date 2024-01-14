import styled from "styled-components";

export const PrimaryButton = styled.button`
  width: 100%;
  background-color: var(--color-secondary);
  border: none;
  color: var(--color-orange);
  height: 50px;
  font-size: 16px;
  font-weight: bolder;
  box-shadow: var(--box-shadow);

  &:hover {
    cursor: pointer;
    color: var(--color-green);
    background-color: #333333;
  }
`;

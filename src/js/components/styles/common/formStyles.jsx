import styled from "styled-components";

export const Input = styled.input`
  height: 40px;
  border-radius: 5px;
  border: none;
  box-sizing: border-box;
  font-size: 18px;
  margin-bottom: 10px;
`;

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0px 25px;
`;

export const Lable = styled.label`
  color: white;
  font-size: 18px;
  font-weight: 600;

  &.white-space {
    margin-top: 40px;
  }
`;

import styled from "styled-components";
import { useState } from "react";
import { FormButton } from "../../buttons/FormButton";

const Input = styled.input`
  height: 40px;
  border-radius: 5px;
  border: none;
  box-sizing: border-box;
  font-size: 18px;
  margin-bottom: 10px;
`;

const FormContainer = styled.div`
  display: flex;
  align-items: center;
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0px 25px;
`;

const Lable = styled.label`
  color: white;
  font-size: 18px;
  font-weight: 600;

  &.white-space {
    margin-top: 40px;
  }
`;

const SingUpForm = () => {
  // eslint-disable-next-line no-unused-vars
  const [form, setForm] = useState({
    name: "",
    email: "",
    venueManager: false,
    avatar: "",
    password: "",
    reTypePassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    form.venueManager =
      localStorage.getItem("managerState") === "false" ? false : true;
    console.log("form-data:", form);
  };

  return (
    <FormContainer>
      <FormWrapper onSubmit={handleSubmit}>
        <Lable htmlFor="name">Name</Lable>
        <Input
          type="text"
          name="name"
          id="name"
          value={form.name}
          onChange={handleChange}
          minLength={3}
          required
        />

        <Lable htmlFor="email">Email</Lable>
        <Input
          type="email"
          name="email"
          id="email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <Lable>Avatar</Lable>
        <Input
          type="text"
          name="avatar"
          id="avatar"
          value={form.avatar}
          onChange={handleChange}
        />

        <Lable htmlFor="password" className="white-space">
          Password
        </Lable>
        <Input
          type="password"
          name="password"
          id="password"
          minLength={8}
          value={form.password}
          onChange={handleChange}
        />

        <Lable htmlFor="reTypePassword">Comfirm Password</Lable>
        <Input
          type="password"
          name="reTypePassword"
          id="reTypePassword"
          value={form.reTypePassword}
          onChange={handleChange}
        />
        <FormButton style={{ marginTop: 40 }}>Sign Up</FormButton>
      </FormWrapper>
    </FormContainer>
  );
};

export default SingUpForm;

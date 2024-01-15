import { useState } from "react";
import { FormButton } from "../../buttons/FormButton";

import {
  Input,
  FormContainer,
  FormWrapper,
  Lable,
} from "../../styles/common/formStyles";

const LoginForm = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
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
    console.log("form-data:", form);
  };

  return (
    <FormContainer>
      <FormWrapper onSubmit={handleSubmit}>
        <Lable htmlFor="email">Email</Lable>
        <Input
          type="email"
          name="email"
          id="name"
          pattern=".+@stud\.noroff\.no$"
          title="Please enter a valid Noroff student email. (stud.noroff.no)"
          value={form.email}
          onChange={handleChange}
          required
        />

        <Lable htmlFor="password">Password</Lable>
        <Input
          type="password"
          name="password"
          id="password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <FormButton style={{ marginTop: 40 }}>Log In</FormButton>
      </FormWrapper>
    </FormContainer>
  );
};

export default LoginForm;

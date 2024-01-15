import { useState } from "react";
import { FormButton } from "../../buttons/FormButton";
import {
  Input,
  FormContainer,
  FormWrapper,
  Lable,
} from "../../styles/common/formStyles";

const SingUpForm = () => {
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
          pattern=".+@stud\.noroff\.no$"
          title="Please enter a valid Noroff student email. (stud.noroff.no)"
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

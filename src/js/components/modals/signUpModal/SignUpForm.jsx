import { useState } from "react";
import { FormButton } from "../../buttons/FormButton";
import {
  Input,
  FormContainer,
  FormWrapper,
  Lable,
} from "../../styles/common/formStyles";
import DisplayMessage from "../../common/DisplayMessage";
import Loader from "../../common/Loader";
import styled from "styled-components";
import { PrimaryButton } from "../../buttons/PrimaryButton";
import useModalStore from "../modalstore/useModalStore";

const Container = styled.div`
  width: 100%;
  color: white;
  font-size: 1.1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
`;

const SingUpForm = () => {
  const { setIsClosing } = useModalStore();
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isRegisterd, setIsRegisterd] = useState(false);
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

  const handleSubmit = async (e) => {
    setIsLoading(true);
    setErrorMessage("");
    e.preventDefault();
    form.venueManager =
      localStorage.getItem("managerState") === "false" ? false : true;

    const url = "https://api.noroff.dev/api/v1/holidaze/auth/register";

    const options = {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(form),
    };

    try {
      const response = await fetch(url, options);
      const json = await response.json();
      if (!response.ok) {
        const errorMessage = json.errors?.[0]?.message || "Failed to connect";
        setErrorMessage(errorMessage);
      } else {
        setIsRegisterd(true);
      }
    } catch (error) {
      console.error("Error during the fetch operation:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <Loader />;
  }
  if (isRegisterd) {
    return (
      <Container>
        {form.email} <br /> Have been registerd
        <div>
          <PrimaryButton onClick={() => setIsClosing(true)}>
            Log In
          </PrimaryButton>
          <PrimaryButton onClick={() => setIsClosing(true)}>Back</PrimaryButton>
        </div>
      </Container>
    );
  }

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
        {errorMessage && (
          <DisplayMessage msgType={"alert"}>{errorMessage}</DisplayMessage>
        )}
        <FormButton style={{ marginTop: 40 }}>Sign Up</FormButton>
      </FormWrapper>
    </FormContainer>
  );
};

export default SingUpForm;

import { useState } from "react";
import { FormButton } from "../../buttons/FormButton";
import {
  Input,
  FormContainer,
  FormWrapper,
  Lable,
} from "../../styles/common/formStyles";
import useModalStore from "../modalstore/useModalStore.jsx";
import Loader from "../../common/Loader.jsx";
import DisplayMessage from "../../common/DisplayMessage.jsx";
import { save } from "../../../storage/save.js";
import { loginUser } from "../../../api/auth/loginUser.js";
import profileStore from "../../../storage/profileStore.jsx";

const LoginForm = () => {
  const { setIsLoggedIn, setManagerState } = profileStore();
  const { setIsClosing } = useModalStore();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const logIn = await loginUser(form);

    try {
      if (logIn.errors) {
        setError(logIn.errors[0].message);
      } else {
        save("accessToken", logIn.accessToken);
        save("managerState", logIn.venueManager);
      }
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      if (!logIn.errors) {
        setIsLoggedIn(true);
        setIsClosing(true);
        setManagerState(logIn.venueManager);
      }
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <Loader />;
  }

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
          style={{ marginBottom: 20 }}
        />
        <DisplayMessage style={{ display: "none" }} msgType={"alert"}>
          {error}
        </DisplayMessage>
        <FormButton style={{ marginTop: 20 }}>Log In</FormButton>
      </FormWrapper>
    </FormContainer>
  );
};

export default LoginForm;

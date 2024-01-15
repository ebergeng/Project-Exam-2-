import LoginForm from "./LoginForm";
import LoginModalHeader from "./LoginModalHeader";
//import { useEffect } from "react"

const LoginModalContent = () => {
  const root = document.documentElement;
  root.style.setProperty("--color-primary", "#003366");
  root.style.setProperty("--color-secondary", "#52A49A");
  return (
    <>
      <LoginModalHeader />
      <LoginForm />
    </>
  );
};

export default LoginModalContent;

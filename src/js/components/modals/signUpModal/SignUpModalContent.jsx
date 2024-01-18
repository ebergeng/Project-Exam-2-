import SingUpForm from "./SignUpForm";
import SignUpModalHeader from "./SignUpModalHeader";
import ToggleSwitch from "./ToggleSwitch";

const SignUpModalContent = () => {
  return (
    <>
      <SignUpModalHeader />
      <ToggleSwitch />
      <SingUpForm />
    </>
  );
};

export default SignUpModalContent;

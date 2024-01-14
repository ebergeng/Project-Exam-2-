import SingUpForm from "./SignUpForm";
import SignUpModalHeader from "./SignUpModalHeader";
import ToggleSwitch from "./ToggleSwitch";

const SignUpModalContent = () => {
  return (
    <>
      <ToggleSwitch />
      <SignUpModalHeader />
      <SingUpForm />
    </>
  );
};

export default SignUpModalContent;

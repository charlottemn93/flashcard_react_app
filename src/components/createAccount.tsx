import React, { useState } from "react";
import { TextInput, PasswordInput } from "../elementLibrary/Elements";
import { submitUserAccountForm } from "../actions/CreateAccountActions";
import { useDispatch, connect } from "react-redux";

const passwordValidationError = ({
  password,
  repeatPassword,
}: {
  password: string;
  repeatPassword: string;
}) => {
  if (password !== repeatPassword) {
    return "Passwords do not match.";
  }
  return "";
};

const errorsOnForm = ({
  password,
  repeatPassword,
}: {
  password: string;
  repeatPassword: string;
}): string[] => {
  const passwordError = passwordValidationError({
    password,
    repeatPassword,
  });
  if (passwordError === "") {
    return [];
  } else {
    return [passwordError];
  }
};

const CreateAccount = () => {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const errors = errorsOnForm({
          password,
          repeatPassword,
        });
        dispatch(
          submitUserAccountForm({
            firstName,
            lastName,
            emailAddress,
            password,
            errors,
          })
        );
      }}
    >
      <TextInput
        placeHolder="First name"
        required={true}
        maxLength={80}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <TextInput
        placeHolder="First name"
        required={true}
        maxLength={100}
        onChange={(e) => setLastName(e.target.value)}
      />
      <TextInput
        placeHolder="Email address"
        required={true}
        maxLength={100}
        onChange={(e) => setEmailAddress(e.target.value)}
      />
      <PasswordInput
        placeHolder="Password"
        required={true}
        minLength={{
          value: 5,
          message: "Minimum length is 5",
        }}
        onChange={(e) => setPassword(e.target.value)}
        validationError=""
      />
      <PasswordInput
        placeHolder="Repeat Password"
        required={true}
        minLength={{
          value: 5,
          message: "Minimum length is 5",
        }}
        onChange={(e) => setRepeatPassword(e.target.value)}
        validationError={passwordValidationError({ password, repeatPassword })}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default connect()(CreateAccount);

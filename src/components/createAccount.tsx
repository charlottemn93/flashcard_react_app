import React, { useState } from 'react';
import { TextInput, PasswordInput } from "../elementLibrary/elements";
import { submitUserAccountForm } from '../actions/createAccountActionCreators';
import { useDispatch, connect } from 'react-redux';

const CreateAccount = () => {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  return (
      <form onSubmit={(e) => {
        e.preventDefault();
        dispatch(submitUserAccountForm({
          firstName,
          lastName,
          emailAddress,
          password,
        }));
      }}>
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
        />
        <PasswordInput
          placeHolder="Repeat Password"
          required={true}
          minLength={{
            value: 5,
            message: "Minimum length is 5",
          }}
          onChange={(e) => setRepeatPassword(e.target.value)}
          />
        <button type="submit">Submit</button>
      </form>
  );
}

export default connect()(CreateAccount);
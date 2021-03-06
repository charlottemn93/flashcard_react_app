import React from "react";
import { inputStyle, errorMessageStyle } from "../components/Style";

// add onBlur to all of these and add that accessibility linter

interface TextInputProps {
  placeHolder: string;
  required: boolean;
  maxLength: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextInput: React.FC<TextInputProps> = ({
  placeHolder,
  required,
  maxLength,
  onChange,
}) => {
  return (
    <div>
      <input
        style={inputStyle}
        type="text"
        placeholder={placeHolder}
        required={required}
        maxLength={maxLength}
        onChange={onChange}
        onBlur={onChange}
      />
      <p></p>
    </div>
  );
};

interface PasswordInputProps {
  placeHolder: string;
  required: boolean;
  minLength: {
    value: number;
    message: string;
  };
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  validationError: string;
}

export const PasswordInput: React.FC<PasswordInputProps> = ({
  placeHolder,
  required,
  onChange,
  validationError,
}) => {
  return (
    <div>
      <input
        style={inputStyle}
        placeholder={placeHolder}
        id={placeHolder}
        required={required}
        onChange={onChange}
        onBlur={onChange}
        type="password"
      />
      <p style={errorMessageStyle}>{validationError}</p>
      <p></p>
    </div>
  );
};

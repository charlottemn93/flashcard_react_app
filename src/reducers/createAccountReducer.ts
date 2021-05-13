import { ActionType } from "../actions/CreateAccountActions";

export type UserAccountData = {
  firstName: string;
  lastName: string;
  emailAddress: string;
  password: string;
};

export type InvalidForm = {
  userAccountData: UserAccountData;
  errors: string[];
};

export type ValidForm = {
  userAccountData: UserAccountData;
};

export type State = ValidForm | InvalidForm;

export const formIsInValid = (form: State): form is InvalidForm =>
  (form as InvalidForm).errors !== undefined;

function initialState(): State {
  // set initial state to not valid as nothing is entered
  return {
    userAccountData: {
      firstName: "",
      lastName: "",
      emailAddress: "",
      password: "",
    },
    errors: [],
  };
}

export function reducer(
  state: State = initialState(),
  action: {
    type: ActionType;
    data: {
      firstName: string;
      lastName: string;
      emailAddress: string;
      password: string;
      errors: string[];
    };
  }
): State {
  switch (action.type) {
    case ActionType.SubmitUserAccountForm:
      const {
        firstName,
        lastName,
        emailAddress,
        password,
        errors,
      } = action.data;
      return errors.length > 0
        ? {
            userAccountData: {
              firstName,
              lastName,
              emailAddress,
              password,
            },
            errors,
          }
        : {
            userAccountData: {
              firstName,
              lastName,
              emailAddress,
              password,
            },
          };

    default:
      return state;
  }
}

export default reducer;

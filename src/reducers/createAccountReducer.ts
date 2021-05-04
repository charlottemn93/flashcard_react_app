import { ActionType } from "../actions/createAccountActions";

export type LoggedIn = {
  userAccount: UserAccount;
};

export type LoggedOut = {
  formData: UserAccount;
};

export type State = LoggedIn | LoggedOut;

export type UserAccount = {
  firstName: string;
  lastName: string;
  emailAddress: string;
  password: string;
};

function initialState(): State {
  return {
    formData: {
      firstName: '',
      lastName: '',
      emailAddress: '',
      password: '',
    },
  };
}

export function reducer(
  state: State = initialState(),
  action: { type: ActionType; data: any }
): State {
  switch (action.type) {
    case ActionType.SubmitUserAccountForm:
      return { userAccount: action.data };

    default:
      return state;
  }
}

export default reducer;

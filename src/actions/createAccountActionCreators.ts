import { ActionType } from "./createAccountActions";
import { UserAccount } from "../reducers/createAccountReducer";

export const submitUserAccountForm = (data: UserAccount) => {
  console.log(`user account data: ${JSON.stringify(data)}`);
  return {
    type: ActionType.SubmitUserAccountForm,
    data,
  };
};

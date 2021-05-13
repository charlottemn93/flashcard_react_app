export const enum ActionType {
  SubmitUserAccountForm,
}

export const submitUserAccountForm = (data: {
  firstName: string;
  lastName: string;
  emailAddress: string;
  password: string;
  errors: string[];
}) => {
  return {
    type: ActionType.SubmitUserAccountForm,
    data,
  };
};

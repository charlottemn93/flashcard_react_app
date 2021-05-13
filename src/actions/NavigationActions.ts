import Page from "../reducers/Page";

export const enum ActionType {
  ChangePage,
}

export const changePage = (data: Page) => {
  return {
    type: ActionType.ChangePage,
    data,
  };
};

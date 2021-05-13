import { ActionType } from "../actions/NavigationActions";
import Page from "./Page";

type State = Page

function initialState(): State {
  return Page.Home;
}

export function reducer(
  state: State = initialState(),
  action: {
    type: ActionType;
    data: Page;
  }
): State {
  switch (action.type) {
    case ActionType.ChangePage:
      return action.data;

    default:
      return state;
  }
}

export default reducer;
import { ActionType } from "../actions/ManageFlashcardActions";
import { Flashcard } from "./Flashcard";

type State = Flashcard[];

function initialState(): State {
  return [];
}

export function reducer(
  state: State = initialState(),
  action: {
    type: ActionType;
    data: any;
  }
): State {
  switch (action.type) {
    case ActionType.AddFlashcard:
      return [...state, action.data];

    default:
      return state;
  }
}

export default reducer;

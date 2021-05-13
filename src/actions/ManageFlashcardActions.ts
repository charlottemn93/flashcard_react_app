import { Flashcard } from "../reducers/Flashcard";

export const enum ActionType {
  AddFlashcard,
}

export const addFlashcard = (data: Flashcard) => {
  return {
    type: ActionType.AddFlashcard,
    data,
  };
};

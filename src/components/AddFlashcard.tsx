import React, { useState } from "react";
import { TextInput } from "../elementLibrary/Elements";
import { addFlashcard } from "../actions/manageFlashcardActions";
import { useDispatch, connect } from "react-redux";

const AddFlashcard = () => {
  const dispatch = useDispatch();
  const [word, setWord] = useState("");
  const [definition, setDefinition] = useState("");

  return (
    <form>
      <TextInput
        placeHolder="Word"
        required={true}
        maxLength={80}
        onChange={(e) => setWord(e.target.value)}
      />
      <TextInput
        placeHolder="Definition"
        required={true}
        maxLength={80}
        onChange={(e) => setDefinition(e.target.value)}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          dispatch(
            addFlashcard({
              word,
              definition,
            })
          );
        }}
      >
        Add
      </button>
    </form>
  );
};

export default connect()(AddFlashcard);

import React from "react";
import { connect } from "react-redux";
import { Flashcard } from "../reducers/Flashcard";

const ManageFlashcards = () => {
  // TODO: replace with call to get flashcards
  const dummyFlashcards = [
    {
      word: "Photosynthesis",
      definition:
        "Photosynthesis is a chemical reaction that takes place inside a plant, producing food for the plant to survive. Carbon dioxide, water and light are all needed for photosynthesis to take place. Photosynthesis happens in the leaves of a plant.",
    },
    {
      word: "Deforestation",
      definition: "The action of clearing a wide area of trees.",
    },
    {
      word: "Globalisation",
      definition:
        "The process by which businesses or other organizations develop international influence or start operating on an international scale.",
    },
  ];

  const flashcards = dummyFlashcards.map((flashcard: Flashcard) => {
    return (
      <li>
        <p>{flashcard.word}</p>
        <p>{flashcard.definition}</p>
      </li>
    );
  });

  return (
    <div>
      {flashcards}
      <button>+</button>
    </div>
  );
};

export default connect()(ManageFlashcards);

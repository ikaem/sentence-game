// src\store\reducers\questions.reducer.ts

import {
  setAnswerActionType,
  newSentenceActionType,
} from "../actions/questions.actions";

type questionsReducerActionsType = setAnswerActionType | newSentenceActionType;
export interface QuestionStateObjectInterface {
  question: string;
  answer: string;
}

export const initialState: QuestionStateObjectInterface[] = [
  {
    question: "who",
    answer: "",
  },
  {
    question: "what",
    answer: "",
  },
  {
    question: "when",
    answer: "",
  },
  {
    question: "where",
    answer: "",
  },
];

const questionsReducer = (
  state = initialState,
  action: questionsReducerActionsType
) => {
  switch (action.type) {
    case "NEW_SENTENCE":
      return initialState;
    case "WHO":
      const whoState = state.map((question) => {
        if (question.question === "who") {
          return {
            question: "who",
            answer: action.payload,
          };
        }
        return question;
      });

      return whoState;

    case "WHAT":
      const whatState = state.map((question) => {
        if (question.question === "what") {
          return {
            question: "what",
            answer: action.payload,
          };
        }
        return question;
      });

      return whatState;

    case "WHEN":
      const whenState = state.map((question) => {
        if (question.question === "when") {
          return {
            question: "when",
            answer: action.payload,
          };
        }
        return question;
      });

      return whenState;

    case "WHERE":
      const whereState = state.map((question) => {
        if (question.question === "where") {
          return {
            question: "where",
            answer: action.payload,
          };
        }
        return question;
      });

      return whereState;

    default:
      return state;
  }
};

export default questionsReducer;

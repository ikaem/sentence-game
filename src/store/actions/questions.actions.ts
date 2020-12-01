// src\store\actions\set-answer.action.ts

export type ANSWER_TYPE = "WHO" | "WHAT" | "WHEN" | "WHERE";

export type setAnswerActionType = {
  type: ANSWER_TYPE;
  payload: string;
};
export type newSentenceActionType = {
  type: typeof NEW_SENTENCE;
};

const NEW_SENTENCE = "NEW_SENTENCE";

// export const setAnswerAction = (
//   type: ANSWER_TYPE,
//   answer: string
// ): setAnswerActionType => {
//   return {
//     type: type,
//     payload: answer,
//   };
// };

export const setAnswerAction = (type: ANSWER_TYPE, answer: string) => {
  return {
    type,
    payload: answer,
  };
};

export const newSentenceAction = (): newSentenceActionType => {
  return {
    type: NEW_SENTENCE,
  };
};

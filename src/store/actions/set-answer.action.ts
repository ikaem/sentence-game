// src\store\actions\set-answer.action.ts

export type ANSWER_TYPE = "WHO" | "WHAT" | "WHEN" | "WHERE";

export type setAnswerActionType = {
  type: ANSWER_TYPE;
  payload: string;
};

export const setAnswer = (
  type: ANSWER_TYPE,
  answer: string
): setAnswerActionType => {
  return {
    type,
    payload: answer,
  };
};

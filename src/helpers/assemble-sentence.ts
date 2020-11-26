// src\helpers\assemble-sentence.ts

import { QuestionStateObjectInterface } from "../store/reducers/questions.reducer";

const assembleSentence = (questions: QuestionStateObjectInterface[]) => {
  return questions
    .reduce((acc, val) => {
      return (acc = `${acc} ${val.answer}`);
    }, "")
    .trim();
};

export default assembleSentence;

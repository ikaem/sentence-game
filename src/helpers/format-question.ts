// src\helpers\format-question.ts

const formatQuestion = (question: string) => {
  return question[0].toUpperCase().concat(question.slice(1)).concat("?");
};

export default formatQuestion;

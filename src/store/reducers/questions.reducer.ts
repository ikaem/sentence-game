// src\store\reducers\questions.reducer.ts

const initialState = [
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

const questionsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default questionsReducer;

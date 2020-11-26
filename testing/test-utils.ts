// testing\test-utils.ts

import { createStore } from "redux";

import { rootReducer } from "../src/store/index";
import { QuestionStateObjectInterface } from "../src/store/reducers/questions.reducer";

export const storeFactory = (
  preloadedState?: QuestionStateObjectInterface[]
) => {
  return createStore(rootReducer, { questions: preloadedState });
};

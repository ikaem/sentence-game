// src\store\index.ts

import { createStore, combineReducers } from "redux";

import questionsReducer from "./reducers/questions.reducer";

export const rootReducer = combineReducers({
  questions: questionsReducer,
});
export type RootStateType = ReturnType<typeof rootReducer>;

export default createStore(rootReducer);

// src\tests\redux-actions.test.ts

import {
  setAnswerAction,
  ANSWER_TYPE,
  setAnswerActionType,
} from "../store/actions/set-answer.action";
import questionsReducer, {
  initialState,
} from "../store/reducers/questions.reducer";

describe("'setAnswerAction", () => {
  test("returns an action with type 'WHO'", () => {
    const type: ANSWER_TYPE = "WHO";
    const answer = "Mark";

    const action = setAnswerAction(type, answer);

    expect(action).toEqual({
      type: "WHO",
      payload: "Mark",
    });
  });
});

describe("'questionsReducer'", () => {
  test("adjusts WHO state question when matching action is passed to it", () => {
    const action: setAnswerActionType = { type: "WHO", payload: "Mark" };
    const testState = initialState.map((question) => {
      if (question.question === "who") {
        return {
          question: "who",
          answer: "Mark",
        };
      }
      return question;
    });

    const reducedState = questionsReducer(undefined, action);
    expect(reducedState).toEqual(testState);
  });
  test("adjusts WHEN state question when matching action is passed to it", () => {
    const action: setAnswerActionType = {
      type: "WHEN",
      payload: "This morning",
    };
    const testState = initialState.map((question) => {
      if (question.question === "when") {
        return {
          question: "when",
          answer: "This morning",
        };
      }
      return question;
    });

    const reducedState = questionsReducer(undefined, action);

    expect(reducedState).toEqual(testState);
  });
});

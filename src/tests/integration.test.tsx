// src\tests\integration.test.ts
import React from "react";
import { Provider } from "react-redux";
import { HTMLAttributes, mount, ReactWrapper } from "enzyme";

import App from "../App";

import { storeFactory } from "../../testing/test-utils";
import { QuestionStateObjectInterface } from "../store/reducers/questions.reducer";
import assembleSentence from "../helpers/assemble-sentence";

const setup = (initialState?: QuestionStateObjectInterface[]) => {
  initialState = initialState ?? [
    {
      question: "who",
      answer: "Mark",
    },
    {
      question: "what",
      answer: "jumps",
    },
    {
      question: "when",
      answer: "all day long",
    },
    {
      question: "where",
      answer: "in his head",
    },
  ];
  const store = storeFactory(initialState);

  return mount(
    <Provider store={store}>
      <App />
    </Provider>
  );
};

describe("Application", () => {
  test("example", () => {});
  // let useState = React.useState;

  // afterEach(() => {
  //   React.useState = useState;
  // });
  // test("renders 'what' question when 'Next Question' button clicked first time", () => {
  //   const wrapper = setup();
  //   const button = wrapper.findWhere(
  //     (element) =>
  //       element.type() === "button" &&
  //       element.prop("children") === "Next Question"
  //   );

  //   button.simulate("click");

  //   const label = wrapper.find("label");
  //   expect(label.text()).toBe("What?");
  // });

  // test("renders 'when' question when 'Next Question' button clicked second time", () => {
  //   const wrapper = setup();

  //   const button = wrapper.findWhere(
  //     (element) =>
  //       element.type() === "button" &&
  //       element.prop("children") === "Next Question"
  //   );

  //   // reaching point before the tested click
  //   for (let i = 0; i < 1; i++) {
  //     button.simulate("click");
  //   }

  //   button.simulate("click");

  //   const label = wrapper.find("label");
  //   expect(label.text()).toBe("When?");
  // });

  // test("does not render 'Go Back' button when the question index is 0", () => {
  //   let button: ReactWrapper<any, any, React.Component<{}, {}, any>>;
  //   const wrapper = setup();

  //   button = wrapper.findWhere(
  //     (element) =>
  //       element.type() === "button" && element.prop("children") === "Go Back"
  //   );

  //   expect(button.length).toBe(0);
  // });
  // test("renders 'When?' question when 'Go Back' button clicked at question index of 3 (which renders 'Where?' question)", async () => {
  //   let goBackButton: ReactWrapper<any, any, React.Component<{}, {}, any>>;
  //   let nextQuestionButton: ReactWrapper<
  //     any,
  //     any,
  //     React.Component<{}, {}, any>
  //   >;
  //   const wrapper = setup();

  //   nextQuestionButton = wrapper.findWhere(
  //     (element) =>
  //       element.type() === "button" &&
  //       element.prop("children") === "Next Question"
  //   );

  //   // reaching point before the tested click
  //   for (let i = 0; i < 3; i++) {
  //     nextQuestionButton.simulate("click");
  //   }

  //   goBackButton = wrapper.findWhere(
  //     (element) =>
  //       element.type() === "button" && element.prop("children") === "Go Back"
  //   );

  //   goBackButton.simulate("click");

  //   const label = wrapper.find("label");
  //   expect(label.text()).toBe("When?");
  // });

  // test("renders 'Who?' in the label element of the 'Anwer' component when the 'App's state is 0", () => {
  //   const questionIndex = 0;
  //   const mockUseState = jest
  //     .fn()
  //     .mockReturnValueOnce([questionIndex, jest.fn()])
  //     .mockReturnValueOnce([false, jest.fn()])
  //     .mockReturnValueOnce(["", jest.fn()]);

  //   React.useState = mockUseState;
  //   const wrapper = setup();

  //   const questionLabel = wrapper.find("label");
  //   expect(questionLabel.text()).toBe("Who?");
  // });
  // test("correctly renders existing answer for a question inside the 'Answer' input", () => {
  //   const state: QuestionStateObjectInterface[] = [
  //     {
  //       question: "who",
  //       answer: "Mark",
  //     },
  //     {
  //       question: "what",
  //       answer: "jumps",
  //     },
  //     {
  //       question: "when",
  //       answer: "all day long",
  //     },
  //     {
  //       question: "where",
  //       answer: "in his head",
  //     },
  //   ];

  //   const wrapper = setup(state);
  //   const answerInput = wrapper.find("input");
  //   expect(answerInput.prop("value")).toBe("Mark");
  // });

  // test("renders sentence assembled out of current answers state in the 'Sentence' component", () => {
  //   const stateQuestions: QuestionStateObjectInterface[] = [
  //     {
  //       question: "who",
  //       answer: "Mark",
  //     },
  //     {
  //       question: "what",
  //       answer: "jumps",
  //     },
  //     {
  //       question: "when",
  //       answer: "all day long",
  //     },
  //     {
  //       question: "where",
  //       answer: "in his head",
  //     },
  //   ];
  //   const sentence = assembleSentence(stateQuestions);
  //   const wrapper = setup(stateQuestions);
  //   const sentenceSpan = wrapper.find("[data-test='sentence-span']");
  //   expect(sentenceSpan.text()).toBe(sentence);
  // });

  // test("renders incomplete sentence properly, with an elipisis", () => {
  //   const stateQuestions: QuestionStateObjectInterface[] = [
  //     {
  //       question: "who",
  //       answer: "Mark",
  //     },
  //     {
  //       question: "what",
  //       answer: "jumps",
  //     },
  //     {
  //       question: "when",
  //       answer: "",
  //     },
  //     {
  //       question: "where",
  //       answer: "",
  //     },
  //   ];
  //   const sentence = assembleSentence(stateQuestions);
  //   const questionIndex = 2;
  //   const mockUseState = jest
  //     .fn()
  //     .mockReturnValueOnce([questionIndex, jest.fn()])
  //     .mockReturnValueOnce([false, jest.fn()])
  //     .mockReturnValueOnce(["", jest.fn()]);
  //   React.useState = mockUseState;

  //   const wrapper = setup(stateQuestions);
  //   const sentenceSpan = wrapper.find("[data-test='sentence-span']");
  //   const elipsisSpan = wrapper.find("[data-test='sentence-span']");

  //   expect(sentenceSpan.text()).toBe(sentence);
  //   expect(elipsisSpan.length).toBe(1);
  // });
  // test("'Next Question' button is disabled when enter invalid input", () => {
  //   const mockEvent = {
  //     target: {
  //       value: "",
  //     },
  //   };
  //   const wrapper = setup();
  //   const answerInput = wrapper.find("input");

  //   answerInput.simulate("change", mockEvent);

  //   const button = wrapper.findWhere(
  //     (element) =>
  //       element.type() === "button" &&
  //       element.prop("children") === "Next Question"
  //   );

  //   expect(button.prop("disabled")).toBe(true);
  // });

  // test("renders correct redux state answer in the input after 'Next Question' button is clicked", () => {
  //   let input: ReactWrapper<HTMLAttributes, any, React.Component<{}, {}, any>>;
  //   let button: ReactWrapper<any, any, React.Component<{}, {}, any>>;

  //   const state = [
  //     {
  //       question: "who",
  //       answer: "",
  //     },
  //     {
  //       question: "what",
  //       answer: "",
  //     },
  //     {
  //       question: "when",
  //       answer: "",
  //     },
  //     {
  //       question: "where",
  //       answer: "",
  //     },
  //   ];
  //   const mockEvent = {
  //     target: {
  //       value: "test",
  //     },
  //   };

  //   const wrapper = setup(state);

  //   input = wrapper.find("input");
  //   input.simulate("change", mockEvent);

  //   button = wrapper.findWhere(
  //     (element) =>
  //       element.type() === "button" &&
  //       element.prop("children") === "Next Question"
  //   );
  //   button.simulate("click");

  //   input = wrapper.find("input");
  //   expect(input.prop("value")).toBe(state[1].answer);
  // });

  // test("renders the value typed into input element as a substring in the 'Sentence' component", () => {
  //   const mockEvent = {
  //     target: {
  //       value: "Mark",
  //     },
  //   };
  //   const state = [
  //     {
  //       question: "who",
  //       answer: "",
  //     },
  //     {
  //       question: "what",
  //       answer: "",
  //     },
  //     {
  //       question: "when",
  //       answer: "",
  //     },
  //     {
  //       question: "where",
  //       answer: "",
  //     },
  //   ];
  //   const wrapper = setup(state);

  //   const input = wrapper.find("input");
  //   input.simulate("change", mockEvent);

  //   const button = wrapper.findWhere(
  //     (element) =>
  //       element.type() === "button" &&
  //       element.prop("children") === "Next Question"
  //   );
  //   button.simulate("click");

  //   const sentenceSpan = wrapper.find("[data-test='sentence-span']");
  //   expect(sentenceSpan.text()).toContain(mockEvent.target.value);
  // });

  // test("does not render 'Answer' component when there is no more questions to ask", () => {
  //   const wrapper = setup();
  //   const button = wrapper.findWhere(
  //     (element) =>
  //       element.type() === "button" &&
  //       element.prop("children") === "Next Question"
  //   );

  //   for (let i = 0; i < 4; i++) {
  //     button.simulate("click");
  //   }

  //   const answerComponent = wrapper.find("[data-test='component-answer']");
  //   expect(answerComponent.length).toBe(0);
  // });
  // test("resets current sentence when 'New Sentence' button clicked", () => {
  //   const wrapper = setup();

  //   const button = wrapper.findWhere(
  //     (element) =>
  //       element.type() === "button" &&
  //       element.prop("children") === "New Sentence"
  //   );

  //   button.simulate("click");

  //   const sentenceSpan = wrapper.find("[data-test='sentence-span']");
  //   const label = wrapper.find("label");
  //   const input = wrapper.find("input");

  //   expect(sentenceSpan.text()).toBe("");
  //   expect(label.text()).toBe("Who?");
  //   expect(input.prop("value")).toBe("");
  // });
});

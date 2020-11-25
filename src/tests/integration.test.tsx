// src\tests\integration.test.ts
import React from "react";
import { Provider } from "react-redux";
import { mount, ReactWrapper } from "enzyme";

import App from "../App";

import { storeFactory } from "../../testing/test-utils";

const setup = (questionIndex = 0, inputValue = "") => {
  const store = storeFactory();

  return mount(
    <Provider store={store}>
      <App />
    </Provider>
  );
};

describe("Application", () => {
  test("renders 'what' question when 'Next Question' button clicked first time", () => {
    const wrapper = setup();
    const button = wrapper.findWhere(
      (element) =>
        element.type() === "button" &&
        element.prop("children") === "Next Question"
    );

    button.simulate("click");

    const testParagraph = wrapper.find("[data-test='test-paragraph']");
    expect(testParagraph.text()).toBe("what");
  });

  test("renders 'when' question when 'Next Question' button clicked second time", () => {
    const wrapper = setup();

    const button = wrapper.findWhere(
      (element) =>
        element.type() === "button" &&
        element.prop("children") === "Next Question"
    );

    // reaching point before the tested click
    for (let i = 0; i < 1; i++) {
      button.simulate("click");
    }

    button.simulate("click");

    const testParagraph = wrapper.find("[data-test='test-paragraph']");
    expect(testParagraph.text()).toBe("when");
  });

  test("clicking on 'Next Question' disables Next button AND keeps the question on 'where' when current question index is 3", () => {
    let button: ReactWrapper<any, any, React.Component<{}, {}, any>>;
    const wrapper = setup();

    button = wrapper.findWhere(
      (element) =>
        element.type() === "button" &&
        element.prop("children") === "Next Question"
    );

    // reaching point before the tested click
    for (let i = 0; i < 4; i++) {
      button.simulate("click");
    }

    button.simulate("click");
    const testParagraph = wrapper.find("[data-test='test-paragraph']");
    button = wrapper.findWhere(
      (element) =>
        element.type() === "button" &&
        element.prop("children") === "Next Question"
    );
    expect(testParagraph.text()).toBe("where");
    expect(button.length).toBe(0);
  });

  test("does not render 'Go Back' button when the question index is 0", () => {
    let button: ReactWrapper<any, any, React.Component<{}, {}, any>>;
    const wrapper = setup();

    button = wrapper.findWhere(
      (element) =>
        element.type() === "button" && element.prop("children") === "Go Back"
    );

    expect(button.length).toBe(0);
  });
  test("renders 'when' question when 'Go Back' button clicked at question index of 3 (which renders 'where' question)", async () => {
    let goBackButton: ReactWrapper<any, any, React.Component<{}, {}, any>>;
    let nextQuestionButton: ReactWrapper<
      any,
      any,
      React.Component<{}, {}, any>
    >;
    const wrapper = setup();

    nextQuestionButton = wrapper.findWhere(
      (element) =>
        element.type() === "button" &&
        element.prop("children") === "Next Question"
    );

    // reaching point before the tested click
    for (let i = 0; i < 3; i++) {
      nextQuestionButton.simulate("click");
    }

    goBackButton = wrapper.findWhere(
      (element) =>
        element.type() === "button" && element.prop("children") === "Go Back"
    );

    goBackButton.simulate("click");

    const testParagraph = wrapper.find("[data-test='test-paragraph']");
    expect(testParagraph.text()).toBe("when");
  });
});

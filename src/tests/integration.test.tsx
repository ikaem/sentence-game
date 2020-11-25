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
  test("renders 'what' question when 'Next Question' button clicked first time", (done) => {
    const wrapper = setup();
    const button = wrapper.findWhere(
      (element) =>
        element.type() === "button" &&
        element.prop("children") === "Next Question"
    );

    button.simulate("click");

    setImmediate(() => {
      wrapper.update();
      const testParagraph = wrapper.find("[data-test='test-paragraph']");
      expect(testParagraph.text()).toBe("what");
      done();
    });
  });

  test("renders 'when' question when 'Next Question' button clicked second time", (done) => {
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

    setImmediate(() => {
      wrapper.update();
      const testParagraph = wrapper.find("[data-test='test-paragraph']");
      expect(testParagraph.text()).toBe("when");
      done();
    });
  });

  test("clicking on 'Next Question' disables Next button AND keeps the question on 'where' when current question index is 3", (done) => {
    const wrapper = setup();

    const button = wrapper.findWhere(
      (element) =>
        element.type() === "button" &&
        element.prop("children") === "Next Question"
    );

    // reaching point before the tested click
    for (let i = 0; i < 4; i++) {
      button.simulate("click");
    }

    button.simulate("click");

    setImmediate(() => {
      wrapper.update();
      const testParagraph = wrapper.find("[data-test='test-paragraph']");
      expect(testParagraph.text()).toBe("where");
      done();
    });
  });
});

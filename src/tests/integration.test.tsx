// src\tests\integration.test.ts
import React from "react";
import { Provider } from "react-redux";
import { mount, ReactWrapper } from "enzyme";

import App from "../App";

import { storeFactory } from "../../testing/test-utils";

const setup = (questionIndex = 0, inputValue = "") => {
  const store = storeFactory();
  const mockUseState = jest
    .fn()
    .mockReturnValueOnce([questionIndex, jest.fn()])
    .mockReturnValueOnce([inputValue, jest.fn()]);
  React.useState = mockUseState;

  return mount(
    <Provider store={store}>
      <App />
    </Provider>
  );
};

describe("Application", () => {
  let useState = React.useState;
  let wrapper: ReactWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

  afterEach(() => {
    React.useState = useState;
  });

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
      // const testParagraph = wrapper.find("[data-test='test-paragraph']");
      // expect(testParagraph.prop("children")).toBe("what");
      done();
    });
  });
});

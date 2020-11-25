// src\tests\app.test.tsx
// import * as ReactRedux from "react-redux";
import React from "react";
import { Provider } from "react-redux";
import { mount, shallow } from "enzyme";

import App from "../App";

import { storeFactory } from "../../testing/test-utils";

const setup = () => {
  const store = storeFactory();
  return mount(
    <Provider store={store}>
      <App />
    </Provider>
  );
};

describe("'App' component", () => {
  const useState = React.useState;

  afterEach(() => {
    React.useState = useState;
  });
  test("renders without crashing", () => {
    const wrapper = setup();
    const component = wrapper.find("[data-test='component-app']");
    expect(component.length).toBe(1);
  });

  test("renders 'who' question in the 'App' component", () => {
    const wrapper = setup();
    const testParagraph = wrapper.find("[data-test='test-paragraph']");
    expect(testParagraph.prop("children")).toBe("who");
  });

  test("renders 'what' question in the 'App' component", () => {
    const mockUseState = jest.fn().mockReturnValue([1, jest.fn()]);
    React.useState = mockUseState;

    const wrapper = setup();
    const testParagraph = wrapper.find("[data-test='test-paragraph']");
    expect(testParagraph.prop("children")).toBe("what");
  });
});

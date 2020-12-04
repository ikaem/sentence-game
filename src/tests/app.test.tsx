// src\tests\app.test.tsx

// import React from "react";
import { Provider } from "react-redux";
import { mount } from "enzyme";

import App from "../App";

import { storeFactory } from "../../testing/test-utils";

const setup = () => {
  const store = storeFactory();
  return mount(
    // return shallow(
    <Provider store={store}>
      <App />
    </Provider>
  );
};

describe("'App' component", () => {
  // const useState = React.useState;
  // afterEach(() => {
  //   React.useState = useState;
  // });
  test("renders without crashing", () => {
    const wrapper = setup();
    const component = wrapper.find("[data-test='component-app']");
    expect(component.length).toBe(1);
  });

  test("renders current question", () => {
    const wrapper = setup();
    const testSpan = wrapper.find("[data-test='test-span']");
    expect(testSpan.props().children).toBe("Who?");
  });
});

// src\tests\integration.test.ts
import React from "react";
import { mount, ReactWrapper } from "enzyme";

import App from "../App";

const setup = () => {
  return mount(<App />);
};

// describe("Application", () => {
//   let wrapper: ReactWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

//   beforeEach(() => {
//     wrapper = setup();
//   });

//   test("renders 'What?' as input label when 'Next Question' button clicked first time", () => {
//     const useState = React.useState;
//     const mockUseState = jest.fn().mockReturnValue([0, useState()[1]]);
//     React.useState = mockUseState;

//     const nextQuestionButton = wrapper.findWhere(
//       (element) =>
//         element.type() === "button" &&
//         element.prop("children") === "Next Question"
//     );

//     console.log(nextQuestionButton.props());
//   });

// });

test("pro forma test", () => {
  // console.log();
});

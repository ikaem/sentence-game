// src\tests\answer.test.tsx

import { shallow } from "enzyme";

import Answer from "../components/answer.component";

const defaultProps = {
  question: "What?",
};

const setup = (props = defaultProps, testProps?: any) => {
  const wrapper = shallow(<Answer {...props} {...testProps} />);
  return wrapper;
};

describe("Answer", () => {
  test("renders without error", () => {
    const wrapper = setup();
    const component = wrapper.find("[data-test='component-answer']");
    expect(component.length).toBe(1);
  });
  test("does not render when 'isNotRendered' prop is true", () => {
    const props = {
      isNotRendered: true,
    };
    const wrapper = setup(defaultProps, props);
    const component = wrapper.find("[data-test='component-answer']");
    expect(component.length).toBe(0);
  });
  test("renders 'question' prop correctly", () => {
    const wrapper = setup();
    const label = wrapper.find("label");
    expect(label.text()).toBe("What?");
  });
  test("passes 'answer' prop to 'input' element corectly", () => {
    const props = {
      answer: "Mark",
    };
    const wrapper = setup(defaultProps, props);
    const input = wrapper.find("input");

    expect(input.prop("value")).toBe(props.answer);
  });

  test("calls 'onHandleChange' when typing inside the input", () => {
    const mockEvent = {
      target: {
        value: "Mark",
      },
    };
    const props = {
      onHandleChange: jest.fn(),
    };

    const wrapper = setup(defaultProps, props);
    const input = wrapper.find("input");
    input.simulate("change", mockEvent);

    expect(props.onHandleChange).toHaveBeenCalledWith(mockEvent);
  });
});

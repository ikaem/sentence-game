// src\tests\answer.test.tsx

import { shallow } from "enzyme";

import Answer from "../components/answer.component";

const defaultProps = {
  isNotRendered: false,
  question: "",
  answer: "",
  onHandleChange: (event: React.ChangeEvent<HTMLInputElement>) => {},
};

const setup = (testProps = defaultProps) => {
  const wrapper = shallow(<Answer {...testProps} />);
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
      ...defaultProps,
      isNotRendered: true,
    };
    const wrapper = setup(props);
    const component = wrapper.find("[data-test='component-answer']");
    expect(component.length).toBe(0);
  });
  test("renders 'question' prop correctly", () => {
    const props = {
      ...defaultProps,
      question: "What?",
    };
    const wrapper = setup(props);
    const label = wrapper.find("label");
    expect(label.text()).toBe("What?");
  });
  test("passes 'answer' prop to 'input' element corectly", () => {
    const props = {
      ...defaultProps,
      answer: "plays football",
    };
    const wrapper = setup(props);
    const input = wrapper.find("input");

    expect(input.props().value).toBe(props.answer);
  });

  test("calls 'onHandleChange' when typing inside the input", () => {
    const mockEvent = {
      target: {
        value: "Mark",
      },
    };
    const props = {
      ...defaultProps,
      onHandleChange: jest.fn(),
    };

    const wrapper = setup(props);
    const input = wrapper.find("input");
    input.simulate("change", mockEvent);

    expect(props.onHandleChange).toHaveBeenCalledTimes(1);
    expect(props.onHandleChange).toHaveBeenCalledWith(mockEvent);
  });
});

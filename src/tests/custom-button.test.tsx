// src\tests\direction-button.test.tsx

import { shallow } from "enzyme";

import CustomButton from "../components/custom-button.component";

const defaultProps = {};

const setup = (props = defaultProps, testProps?: any) => {
  const wrapper = shallow(<CustomButton {...props} {...testProps} />);
  return wrapper;
};

describe("DirectionButton", () => {
  test("renders without crashing", () => {
    const wrapper = setup();
    const component = wrapper.find("[data-test='component-direction-button']");

    expect(component.length).toBe(1);
  });
  test("does not render when not needed", () => {
    const props = {
      isNotRendered: true,
    };

    const wrapper = setup(defaultProps, props);
    const component = wrapper.find("[data-test='component-direction-button']");

    expect(component.length).toBe(0);
  });

  test("renders label prop as the button label", () => {
    const props = {
      label: "Go Back",
    };
    const wrapper = setup(defaultProps, props);
    const button = wrapper.find("[data-test='component-direction-button']");

    expect(button.prop("children")).toBe(props.label);
  });

  test("calls 'onHandleClick' prop when button is clicked", () => {
    const props = {
      onHandleClick: jest.fn(),
    };

    const wrapper = setup(defaultProps, props);
    const button = wrapper.find("[data-test='component-direction-button']");
    button.simulate("click");

    expect(props.onHandleClick).toHaveBeenCalledTimes(1);
  });

  test("'Next Question' button is disabled in case of invalid input", () => {
    const props = {
      label: "Next Question",
      isInvalidInput: true,
    };

    const wrapper = setup(defaultProps, props);
    const button = wrapper.findWhere(
      (element) =>
        element.type() === "button" && element.prop("children") === props.label
    );

    expect(button.prop("disabled")).toBe(true);
  });
});

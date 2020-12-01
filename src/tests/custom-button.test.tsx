// src\tests\direction-button.test.tsx

import { shallow } from "enzyme";

import CustomButton from "../components/custom-button.component";

const defaultProps = {
  label: "",
  isNotRendered: false,
  onHandleClick: () => {},
  primaryColor: "",
  secondaryColor: "",
};

const setup = (testProps = defaultProps) => {
  const wrapper = shallow(<CustomButton {...testProps} />);
  return wrapper;
};

describe("CustomButton", () => {
  test("renders without crashing", () => {
    const wrapper = setup();
    const component = wrapper.find("[data-test='component-direction-button']");
    expect(component.length).toBe(1);
  });
  test("does not render when not needed", () => {
    const props = {
      ...defaultProps,
      isNotRendered: true,
    };
    const wrapper = setup(props);
    const component = wrapper.find("[data-test='component-direction-button']");
    expect(component.length).toBe(0);
  });
  test("renders label prop as the button label", () => {
    const props = {
      ...defaultProps,
      label: "Go Back",
    };
    const wrapper = setup(props);
    const button = wrapper.find("[data-test='component-direction-button']");
    expect(button.prop("children")).toBe(props.label);
  });
  test("calls 'onHandleClick' prop when button is clicked", () => {
    const props = {
      ...defaultProps,
      onHandleClick: jest.fn(),
    };
    const wrapper = setup(props);
    const button = wrapper.find("[data-test='component-direction-button']");
    button.simulate("click");
    expect(props.onHandleClick).toHaveBeenCalledTimes(1);
  });
  test("'Next Question' button is disabled in case of invalid input", () => {
    const props = {
      ...defaultProps,
      label: "Next Question",
      isInvalidInput: true,
    };
    const wrapper = setup(props);
    const button = wrapper.findWhere(
      (element) =>
        element.type() === "button" && element.prop("children") === props.label
    );
    expect(button.prop("disabled")).toBe(true);
  });
});

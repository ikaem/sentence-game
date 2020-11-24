// src\tests\sentence.test.tsx

import { shallow } from "enzyme";

import Sentence from "../components/sentence.component";

const defaultProps = {
  sentence: "",
};

const setup = (props = defaultProps, testProps?: any) => {
  const wrapper = shallow(<Sentence {...props} {...testProps} />);
  return wrapper;
};

describe("Sentence", () => {
  test("renders without error", () => {
    const wrapper = setup();
    const component = wrapper.find("[data-test='component-sentence']");
    expect(component.length).toBe(1);
  });

  test("renders passed in truthy sentence prop", () => {
    const props = {
      sentence: "Who does what when",
    };
    const wrapper = setup(defaultProps, props);
    const sentence = wrapper.find("[data-test='sentence-span']");

    expect(sentence.text()).toContain(props.sentence);
  });

  test("does not render elipsis when sentence is complete", () => {
    const props = {
      //   isNotComplete: true,
    };

    const wrapper = setup(defaultProps, props);
    const elipsis = wrapper.find("[data-test='elipsis-span']");

    expect(elipsis.length).toBe(0);
  });

  test("renders elipsis when sentence is not complete", () => {
    const props = {
      isNotComplete: true,
    };

    const wrapper = setup(defaultProps, props);
    const elipsis = wrapper.find("[data-test='elipsis-span']");

    expect(elipsis.length).toBe(1);
  });
});

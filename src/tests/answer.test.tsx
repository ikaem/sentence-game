// src\tests\answer.test.tsx

import { shallow, ShallowWrapper } from "enzyme";

import Answer from "../components/answer.component";

const setup = (props = {}) => {
  const wrapper = shallow(<Answer {...props} />);
  return wrapper;
};

describe("Anwer", () => {
  let wrapper: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

  beforeEach(() => {
    wrapper = setup();
  });

  test("renders without error", () => {
    const component = wrapper.find("[data-test='component-answer']");
    expect(component.length).toBe(1);
  });
});

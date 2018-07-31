import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Message from "components/atoms/Message";

configure({ adapter: new Adapter() });

test("show message", () => {
  const message = shallow(<Message message="test message" />);
  expect(message.dive().text()).toEqual("test message");
});

test("snapshot", () => {
  const tree = renderer.create(<Message message="test message" />).toJSON();
  expect(tree).toMatchSnapshot();
});

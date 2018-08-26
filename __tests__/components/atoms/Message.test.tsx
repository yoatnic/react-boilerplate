import * as assert from "assert";
import * as React from "react";
import * as renderer from "react-test-renderer";
import "jest-styled-components";
import { shallow, configure } from "enzyme";
// HACK see: https://github.com/airbnb/enzyme/pull/1264
const Adapter = require("enzyme-adapter-react-16");
import Message from "../../../src/components/atoms/Message";

configure({ adapter: new Adapter() });

test("show message", () => {
  const message = shallow(<Message message="test message" />);
  assert(message.dive().text() === "test message");
});

test("snapshot", () => {
  const tree = renderer.create(<Message message="test message" />).toJSON();
  expect(tree).toMatchSnapshot();
});

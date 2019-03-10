import * as React from "react";
import * as renderer from "react-test-renderer";
import "jest-styled-components";
import { configure } from "enzyme";
// HACK see: https://github.com/airbnb/enzyme/pull/1264
const Adapter = require("enzyme-adapter-react-16");
import Message from "../../../src/components/atoms/Message";

configure({ adapter: new Adapter() });

test("snapshot", () => {
  const tree = renderer.create(<Message message="test message" />).toJSON();
  expect(tree).toMatchSnapshot();
});

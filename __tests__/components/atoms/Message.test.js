import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import Message from "components/atoms/Message";

test("show message", () => {
  const tree = renderer.create(<Message message="test message" />).toJSON();
  expect(tree.children[0]).toEqual("test message");
});

test("snap shot", () => {
  const tree = renderer.create(<Message message="test message" />).toJSON();
  expect(tree).toMatchSnapshot();
});

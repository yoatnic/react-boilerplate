import * as assert from "assert";
import { spy } from "sinon";
import * as React from "react";
import * as renderer from "react-test-renderer";
import { mount, configure } from "enzyme";
// HACK see: https://github.com/airbnb/enzyme/pull/1264
const Adapter = require("enzyme-adapter-react-16");
import PostForm from "../../../src/components/molecules/PostForm";

configure({ adapter: new Adapter() });

test("click button => post message and clear input field", () => {
  const postFunc = spy();
  const form = mount(<PostForm onMessagePosted={postFunc} />);

  form.find("input").simulate("change", {
    target: { value: "test message" }
  });
  form.find("button").simulate("click");

  assert(postFunc.calledWith("test message") === true);
  assert(postFunc.calledOnce === true);
  assert(form.find("input").props().value === "");
});

test("snapshot", () => {
  const tree = renderer
    .create(<PostForm onMessagePosted={() => {}} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

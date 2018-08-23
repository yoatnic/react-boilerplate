import assert from "assert";
import React from "react";
import renderer from "react-test-renderer";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import sinon from "sinon";
import PostForm from "components/molecules/PostForm";

configure({ adapter: new Adapter() });

test("click button => post message and clear input field", () => {
  const postFunc = sinon.spy();
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

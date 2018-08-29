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

  expect(postFunc.calledWith("test message")).toEqual(true);
  expect(postFunc.calledOnce).toEqual(true);
  expect(form.find("input").props().value).toEqual("");
});

test("snapshot", () => {
  const callback = () => {};
  const tree = renderer
    .create(<PostForm onMessagePosted={callback} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

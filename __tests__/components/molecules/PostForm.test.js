import React from "react";
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

  expect(postFunc.calledWith("test message")).toEqual(true);
  expect(postFunc.calledOnce).toEqual(true);
  expect(form.find("input").props().value).toEqual("");
});

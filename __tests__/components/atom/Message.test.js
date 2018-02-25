import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Message from "components/atom/Message";

configure({ adapter: new Adapter() });

test("show message", () => {
  const message = shallow(<Message message="test message" />);

  expect(message.text()).toEqual("test message");
});

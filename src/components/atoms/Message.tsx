import * as React from "react";
import styled from "styled-components";

interface Props {
  message: string;
}

const MessageContent = styled.div`
  width: "100%";
  border-bottom: "1px solid";
`;

const Message = (props: Props) => {
  return <MessageContent>{props.message}</MessageContent>;
};

export default Message;

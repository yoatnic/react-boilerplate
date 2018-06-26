//@flow
import React from "react";
import styled from "styled-components";
import Message from "../atoms/Message";

type Props = {
  messages: Array<{
    id: number,
    body: string
  }>
};

const MessagesContent = styled.div`
  width: 100%;
`;

const Messages = (props: Props) => {
  return (
    <MessagesContent>
      {props.messages.map(msg => <Message key={msg.id} message={msg.body} />)}
    </MessagesContent>
  );
};

export default Messages;

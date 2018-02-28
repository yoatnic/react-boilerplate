//@flow
import React from "react";
import Message from "../atoms/Message";
import PropTypes from "prop-types";

type Props = {
  messages: Array<{
    id: number,
    body: string
  }>
};

const Messages = (props: Props) => {
  const style = {
    width: "100%"
  };
  return (
    <div style={style}>
      {props.messages.map(msg => <Message key={msg.id} message={msg.body} />)}
    </div>
  );
};

export default Messages;

import React from "react";
import Message from "../atom/Message";

const Messages = props => {
  const style = {
    width: "100%"
  };
  return (
    <div style={style}>
      {props.messages.map((msg, index) => (
        <Message key={index} message={msg} />
      ))}
    </div>
  );
};

export default Messages;

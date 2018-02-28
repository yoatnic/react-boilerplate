import React from "react";
import Message from "../atoms/Message";
import PropTypes from "prop-types";

const Messages = props => {
  const style = {
    width: "100%"
  };
  return (
    <div style={style}>
      {props.messages.map(msg => <Message key={msg.id} message={msg.body} />)}
    </div>
  );
};

Messages.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      body: PropTypes.string
    })
  ).isRequired
};

export default Messages;

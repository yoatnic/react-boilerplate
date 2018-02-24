import React from "react";
import PropTypes from "prop-types";

const Message = props => {
  const style = {
    width: "100%",
    borderBottom: "1px solid"
  };
  return <div style={style}>{props.message}</div>;
};

Message.propTypes = {
  message: PropTypes.string.isRequired
};

export default Message;

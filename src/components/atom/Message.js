import React from "react";

const Message = props => {
  const style = {
    width: "100%",
    borderBottom: "1px solid"
  };
  return <div style={style}>{props.message}</div>;
};

export default Message;

//@flow
import React from "react";
import PropTypes from "prop-types";

type Props = {
  message: string
};

const Message = (props: Props) => {
  const style = {
    width: "100%",
    borderBottom: "1px solid"
  };
  return <div style={style}>{props.message}</div>;
};

export default Message;

import React from "react";
import PropTypes from "prop-types";

const PostForm = props => {
  let textInput = null;

  function handleClick() {
    if (!textInput.value) return;
    props.onMessagePosted(textInput.value);
    textInput.value = "";
  }

  return (
    <div>
      <input
        type="text"
        ref={input => {
          textInput = input;
        }}
      />
      <button onClick={handleClick}>post message</button>
    </div>
  );
};

PostForm.propTypes = {
  onMessagePosted: PropTypes.func.isRequired
};

export default PostForm;

import React from "react";

const PostForm = props => {
  let textInput = null;

  function handleClick() {
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

export default PostForm;

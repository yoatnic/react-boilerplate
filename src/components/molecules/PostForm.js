import React from "react";
import PropTypes from "prop-types";

class PostForm extends React.Component {
  constructor() {
    super(...arguments);

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      text: ""
    };
  }

  handleClick() {
    if (!this.state.text) return;
    this.props.onMessagePosted(this.state.text);
    this.setState({ text: "" });
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.text}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>post message</button>
      </div>
    );
  }
}

PostForm.propTypes = {
  onMessagePosted: PropTypes.func.isRequired
};

export default PostForm;

//@flow
import React from "react";

type Props = {
  onMessagePosted: Function
};

type State = {
  text: string
};

class PostForm extends React.Component<Props, State> {
  constructor() {
    super(...arguments);

    (this: any).handleClick = this.handleClick.bind(this);
    (this: any).handleChange = this.handleChange.bind(this);
    this.state = {
      text: ""
    };
  }

  handleClick() {
    if (!this.state.text) return;
    this.props.onMessagePosted(this.state.text);
    this.setState({ text: "" });
  }

  handleChange(e: SyntheticInputEvent<HTMLInputElement>) {
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

export default PostForm;

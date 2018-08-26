import * as React from "react";

interface Props {
  onMessagePosted: Function;
}

interface State {
  text: string;
}

class PostForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

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

  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
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

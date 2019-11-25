import React from "react";
import axios from "axios";
class Form extends React.Component {
  state = { userName: "" };
  handleSubmit = async event => {
    event.preventDefault();
    const resp = await axios.get(
      `https://api.github.com/users/${this.state.userName}`
    );
    this.props.onSubmit(resp.data);
    this.setState({ userName: "" });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="Github UserName"
          value={this.state.userName}
          onChange={event => this.setState({ userName: event.target.value })}
        />
        <button>Add card</button>
      </form>
    );
  }
}

export default Form;

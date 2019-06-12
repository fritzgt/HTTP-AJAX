import React from "react";
import { Link } from "react-router-dom";

class UpdateFriend extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: "",
      email: ""
    };
  }

  //change handler
  handleChange = event => {
    // console.log("event name", event.target.name);
    // console.log("event value", event.target.value);
    this.setState({
      [event.target.name]: event.target.value,
      id: this.props.match.params.id
    });
  };

  //submit update
  handleSubmit = event => {
    event.preventDefault();
    //clear input/state after submit
    const friendId = this.props.match.params.id;
    console.log(friendId);
    this.setState({
      name: "",
      age: "",
      email: ""
    });
    this.props.updateFriend({ ...this.state }, friendId);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-group">
        <input
          placeholder="Name"
          type="text"
          name="name"
          onChange={this.handleChange}
          value={this.state.name}
        />
        <input
          placeholder="Age"
          type="number"
          name="age"
          onChange={this.handleChange}
          value={this.state.age}
        />
        <input
          placeholder="email"
          type="text"
          name="email"
          onChange={this.handleChange}
          value={this.state.email}
        />
        <button type="submit">Update</button>
      </form>
    );
  }
}

export default UpdateFriend;
